const DbService = require("./DbService");

class UserService {
	static #db = new DbService("users");

	static async create(data) {
		const user = await UserService.#db.create(data);
		return user;
	}

	static async getById(id) {
		const user = await UserService.#db.getById(id);
		if (user == null) {
			throw new ApiError(400, "User with provided id doesn't exist.");
		}

		return user;
	}

	static async getByUsername(username) {
		const users = await UserService.#db.getAll();
		return users.find(el => el.username === username);
	}
}

module.exports = UserService;
