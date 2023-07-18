const fs = require("fs");
const path = require("path");
const db = require("../db.json");
const {nanoid} = require("nanoid");
const {ApiError} = require("../error");

class TaskController {
	static create(req, res, next) {
		try {
			const {title, text, tags, course, subject} = req.body;

			const task = {id: nanoid(), title, text, tags, course, subject};
			const updatedDb = {...db, tasks: [...db.tasks, task]};
			fs.writeFile(
				path.resolve(__dirname, "../db.json"),
				JSON.stringify(updatedDb, null, 2),
				"utf-8",
				err => {
					if (err) {
						throw err;
					}
				}
			);

			res.status(201).json(task);
		} catch (e) {
			next(e);
		}
	}

	static getAll(req, res, next) {
		try {
			let {page, limit, search} = req.query;

			page = page ? Number(page) : 1;
			limit = limit ? Number(limit) : 10;
			search = search || "";

			const offset = (page - 1) * limit;

			const filteredTasks = db.tasks.filter(task =>
				task.title.toLowerCase().includes(search.toLowerCase())
			);
			const paginatedTasks = filteredTasks.slice(offset, offset + limit);

			const totalCount = filteredTasks.length;
			const totalPages = Math.ceil(totalCount / limit);

			res.json({
				tasks: paginatedTasks,
				totalCount,
				page,
				limit,
				totalPages
			});
		} catch (e) {
			next(e);
		}
	}

	static getById(req, res, next) {
		try {
			const {id} = req.params;

			const task = db.tasks.find(task => task.id === id);

			if (task === undefined) {
				throw new ApiError("Task with provided id doesn't exist.");
			}

			res.json(task);
		} catch (e) {
			next(e);
		}
	}

	static getAllByUserId(req, res, next) {
		try {
			const {userId} = req.params;
			let {page, limit, search} = req.query;

			page = page ? Number(page) : 1;
			limit = limit ? Number(limit) : 10;
			search = search || "";

			const offset = (page - 1) * limit;

			const filteredTasks = db.tasks
				.filter(task => task.creatorId === userId)
				.filter(task =>
					task.title.toLowerCase().includes(search.toLowerCase())
				);
			const paginatedTasks = filteredTasks.slice(offset, offset + limit);

			const totalCount = filteredTasks.length;
			const totalPages = Math.ceil(totalCount / limit);

			res.json({
				tasks: paginatedTasks,
				totalCount,
				page,
				limit,
				totalPages
			});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = TaskController;
