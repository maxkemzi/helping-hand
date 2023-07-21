const {TaskService, UserService} = require("../services");
const {parseGetParams, calcTotalPages} = require("../utils/helpers");

class TaskController {
	static async create(req, res, next) {
		try {
			const {title, text, tags} = req.body;
			const userId = req.user?.id;

			const creator = await UserService.getById(userId);
			const task = await TaskService.create({
				title,
				text,
				tags,
				creator
			});

			res.status(201).json(task);
		} catch (e) {
			next(e);
		}
	}

	static async upvoteById(req, res, next) {
		try {
			const {id} = req.params;
			const userId = req.user?.id;

			const task = await TaskService.upvoteById(id, userId);

			res.json(task);
		} catch (e) {
			next(e);
		}
	}

	static async getById(req, res, next) {
		try {
			const {id} = req.params;

			const task = await TaskService.getById(id);

			res.json(task);
		} catch (e) {
			next(e);
		}
	}

	static async getAll(req, res, next) {
		try {
			let {page, limit, search, offset} = parseGetParams(req.query);

			const {tasks, totalCount} = await TaskService.getAll({
				offset,
				limit,
				search
			});
			const totalPages = calcTotalPages(totalCount, limit);

			res.json({
				page,
				limit,
				tasks,
				totalCount,
				totalPages
			});
		} catch (e) {
			next(e);
		}
	}

	static async getAllByUserId(req, res, next) {
		try {
			const {userId} = req.params;
			let {page, limit, search, offset} = parseGetParams(req.query);

			const {tasks, totalCount} = await TaskService.getAllByUserId(userId, {
				offset,
				limit,
				search
			});
			const totalPages = calcTotalPages(totalCount, limit);

			res.json({
				page,
				limit,
				tasks,
				totalCount,
				totalPages
			});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = TaskController;
