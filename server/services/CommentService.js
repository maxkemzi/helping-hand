const DbService = require("./DbService");
const {ApiError} = require("../error");

class CommentService {
	static #db = new DbService("comments");

	static async create({taskId, userId, text}) {
		const comment = await CommentService.#db.create({
			text,
			taskId,
			userId,
			upvotes: [],
			downvotes: []
		});
		return comment;
	}

	static async upvoteById(id, userId) {
		const comment = await CommentService.#db.getById(id);
		if (comment === null) {
			throw new ApiError(400, "Comment with provided id doesn't exist.");
		}

		const alreadyUpvoted = comment.upvotes.includes(userId);
		if (alreadyUpvoted) {
			throw new ApiError(400, "Task has already been upvoted.");
		}

		const updatedComment = await CommentService.#db.updateById(id, {
			upvotes: [...comment.upvotes, userId],
			downvotes: comment.downvotes.filter(el => el !== userId)
		});
		return updatedComment;
	}

	static async downvoteById(id, userId) {
		const comment = await CommentService.#db.getById(id);
		if (comment === null) {
			throw new ApiError(400, "Comment with provided id doesn't exist.");
		}

		const alreadyDownvoted = comment.downvotes.includes(userId);
		if (alreadyDownvoted) {
			throw new ApiError(400, "Task has already been downvoted.");
		}

		const updatedComment = await CommentService.#db.updateById(id, {
			downvotes: [...comment.downvotes, userId],
			upvotes: comment.upvotes.filter(el => el !== userId)
		});
		return updatedComment;
	}

	static async getByTaskId(taskId) {
		const comments = await CommentService.#db.getAll();

		const filteredComments = comments.filter(el => el.taskId === taskId);
		return filteredComments;
	}
}

module.exports = CommentService;
