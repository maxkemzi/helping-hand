const {ApiError} = require("../error");
const {TaskStatus} = require("../utils/constants");
const DbService = require("./DbService");

class TaskService {
	static #db = new DbService("tasks");

	static async create(data) {
		const task = await TaskService.#db.create({
			upvotes: [],
			status: TaskStatus.OPEN,
			...data
		});

		return task;
	}

	static async upvoteById(id, userId) {
		const task = await TaskService.#db.getById(id);
		if (task === null) {
			throw new ApiError(400, "Task by provided id doesn't exist.");
		}

		const isUpvoted = task.upvotes.includes(userId);
		const updatedTask = await TaskService.#db.updateById(id, {
			upvotes: isUpvoted
				? task.upvotes.filter(el => el !== userId)
				: [...task.upvotes, userId]
		});

		return updatedTask;
	}

	static async getAll({offset, limit, search}) {
		const tasks = await TaskService.#db.getAll();

		const filteredTasks = tasks.filter(task =>
			task.title.toLowerCase().includes(search.toLowerCase())
		);

		const paginatedTasks = filteredTasks.slice(offset, offset + limit);
		const totalCount = filteredTasks.length;

		return {tasks: paginatedTasks, totalCount};
	}

	static async getAllByUserId(userId, {offset, limit, search} = {}) {
		const tasks = await TaskService.#db.getAll();

		const filteredTasks = tasks
			.filter(task => task.creator.id === userId)
			.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

		const paginatedTasks = filteredTasks.slice(offset, offset + limit);
		const totalCount = filteredTasks.length;

		return {tasks: paginatedTasks, totalCount};
	}

	static async getById(id) {
		const task = await TaskService.#db.getById(id);
		if (task === null) {
			throw new ApiError(400, "Task by provided id doesn't exist.");
		}

		return task;
	}
}

module.exports = TaskService;
