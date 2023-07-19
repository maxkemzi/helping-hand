const {TaskService} = require("../services");

class TaskController {
	static async create(req, res, next) {
		try {
			const {title, text, tags, course, subject} = req.body;
			const userId = req.user?.id;

			const task = await TaskService.create(userId, {
				title,
				text,
				tags,
				course,
				subject
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
			let {page, limit, search, offset} = TaskController.#parseQueryParams(
				req.query
			);

			const {tasks, totalCount} = await TaskService.getAll({
				offset,
				limit,
				search
			});
			const totalPages = TaskController.#calcTotalPages(totalCount, limit);

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
			let {page, limit, search, offset} = TaskController.#parseQueryParams(
				req.query
			);

			const {tasks, totalCount} = await TaskService.getAllByUserId(userId, {
				offset,
				limit,
				search
			});
			const totalPages = TaskController.#calcTotalPages(totalCount, limit);

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

	static #parseQueryParams(query) {
		let {page, limit, search} = query;

		page = page ? Number(page) : 1;
		limit = limit ? Number(limit) : 10;
		search = search || "";
		const offset = (page - 1) * limit;

		return {page, limit, search, offset};
	}

	static #calcTotalPages(totalCount, limit) {
		return Math.ceil(totalCount / limit);
	}
}

module.exports = TaskController;
