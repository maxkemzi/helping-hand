const {CommentService} = require("../services");

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

	static async downvoteById(req, res, next) {
		try {
			const {id} = req.params;
			const userId = req.user?.id;

			const comment = await CommentService.downvoteById(id, userId);

			res.json(comment);
		} catch (e) {
			next(e);
		}
	}

	static async getByTaskId(req, res, next) {
		try {
			const {taskId} = req.params;

			const comments = await CommentService.getByTaskId(taskId);

			res.json(comments);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = CommentController;
