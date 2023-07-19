const {Router} = require("express");
const {CommentController} = require("../controllers");
const {authMiddleware} = require("../middlewares");

const commentRouter = Router();

commentRouter.post("/:taskId", authMiddleware, CommentController.create);
commentRouter.post("/upvote/:id", authMiddleware, CommentController.upvoteById);
commentRouter.post("/downvote/:id", authMiddleware, CommentController.downvoteById);
commentRouter.get("/:taskId", CommentController.getByTaskId);

module.exports = commentRouter;
