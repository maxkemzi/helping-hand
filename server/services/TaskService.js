const {ApiError} = require("../error");
const DbService = require("./DbService");
const UserService = require("./UserService");

class TaskService {
	static #db = new DbService("tasks");

	static async create(userId, data) {
		const creator = await UserService.getById(userId);

		const task = await TaskService.#db.create({
			upvotes: [],
			creator,
			...data
		});

		return task;
	}

	static async upvoteById(id, userId) {
		const task = await TaskService.#db.getById(id);
		if (task === null) {
			throw new ApiError(400, "Task by provided id doesn't exist.");
		}

		if (task.upvotes.includes(userId)) {
			throw new ApiError(400, "Task has already been upvoted.");
		}

		const updatedTask = await TaskService.#db.updateById(id, {
			upvotes: [...task.upvotes, userId]
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

	static async getAllByUserId(userId, {offset, limit, search}) {
		const tasks = await TaskService.#db.getAll();

		const filteredTasks = tasks
			.filter(task => task.creatorId === userId)
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
