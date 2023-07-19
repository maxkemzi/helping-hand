const DbService = require("./DbService");

class UserService {
	static #db = new DbService("users");

	static async getById(id) {
		const user = UserService.#db.getById(id);
		if (user === null) {
			throw new ApiError(400, "User with provided id doesn't exist.");
		}

		return user;
	}
}

module.exports = UserService;
