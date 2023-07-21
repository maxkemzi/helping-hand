const {Router} = require("express");
const {CommentController} = require("../controllers");
const {authMiddleware} = require("../middlewares");

const commentRouter = Router();

commentRouter.post("/:taskId", authMiddleware, CommentController.create);
commentRouter.post("/upvote/:id", authMiddleware, CommentController.upvoteById);
commentRouter.get("/:taskId", authMiddleware, CommentController.getByTaskId);

module.exports = commentRouter;
