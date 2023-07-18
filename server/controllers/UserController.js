const {users} = require("../db.json");
const {ApiError} = require("../error");

class UserController {
	static getById(req, res, next) {
		try {
			const {id} = req.params;

			const user = users.find(el => el.id === id);

			if (user === undefined) {
				throw new ApiError(404, "User with provided id doesn't exist.")
			}

			res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UserController;
