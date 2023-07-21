const {CommentService} = require("../services");
const {parseGetParams, calcTotalPages} = require("../utils/helpers");

class CommentController {
	static async create(req, res, next) {
		try {
			const {taskId} = req.params;
			const userId = req.user?.id;
			const {text} = req.body;

			const comment = await CommentService.create({taskId, userId, text});

			res.status(201).json(comment);
		} catch (e) {
			next(e);
		}
	}

	static async upvoteById(req, res, next) {
		try {
			const {id} = req.params;
			const userId = req.user?.id;

			const comment = await CommentService.upvoteById(id, userId);

			res.json(comment);
		} catch (e) {
			next(e);
		}
	}

	static async getByTaskId(req, res, next) {
		try {
			const {taskId} = req.params;
			const {page, limit, offset} = parseGetParams(req.query);

			const {comments, totalCount} = await CommentService.getByTaskId(taskId, {
				offset,
				limit
			});
			const totalPages = calcTotalPages(totalCount, limit);

			res.json({comments, totalCount, totalPages, page, limit});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = CommentController;
