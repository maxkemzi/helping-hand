const DbService = require("./DbService");
const {ApiError} = require("../error");
const UserService = require("./UserService");
const TaskService = require("./TaskService");

class CommentService {
	static #db = new DbService("comments");

	static async create({taskId, userId, text}) {
		const task = await TaskService.getById(taskId);
		const user = await UserService.getById(userId);

		const comment = await CommentService.#db.create({
			text,
			task,
			user,
			upvotes: []
		});
		return comment;
	}

	static async upvoteById(id, userId) {
		const comment = await CommentService.#db.getById(id);
		if (comment === null) {
			throw new ApiError(400, "Comment with provided id doesn't exist.");
		}

		const alreadyUpvoted = comment.upvotes.includes(userId);
		const updatedComment = await CommentService.#db.updateById(id, {
			upvotes: alreadyUpvoted
				? comment.upvotes.filter(el => el !== userId)
				: [...comment.upvotes, userId]
		});

		return updatedComment;
	}

	static async getByTaskId(taskId, {offset, limit}) {
		const comments = await CommentService.#db.getAll();

		const filteredComments = comments.filter(el => el.task.id === taskId);

		const paginatedComments = filteredComments.slice(offset, offset + limit);
		const totalCount = filteredComments.length;

		return {comments: paginatedComments, totalCount};
	}

	static async getAllByUserId(userId) {
		const comments = await CommentService.#db.getAll();
		return comments.filter(el => el.user.id === userId);
	}
}

module.exports = CommentService;
