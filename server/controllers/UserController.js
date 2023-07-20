const {UserService, TaskService, CommentService} = require("../services");

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

	static async getStatisticsById(req, res, next) {
		try {
			const {id} = req.params;

			const [tasks, comments] = await Promise.all([
				TaskService.getAllByUserId(id, {limit: 10, offset: 0, search: ""}),
				CommentService.getAllByUserId(id)
			]);

			res.json({taskCount: tasks.totalCount, commentCount: comments.length});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UserController;
