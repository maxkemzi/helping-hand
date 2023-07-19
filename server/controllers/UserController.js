const {UserService} = require("../services");

class UserController {
	static async getById(req, res, next) {
		try {
			const {id} = req.params;

			const user = await UserService.getById(id);

			res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UserController;
