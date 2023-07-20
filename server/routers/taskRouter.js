const {Router} = require("express");
const {TaskController} = require("../controllers");
const {authMiddleware} = require("../middlewares");

const taskRouter = Router();

taskRouter.post("/", authMiddleware, TaskController.create);
taskRouter.post("/upvote/:id", authMiddleware, TaskController.upvoteById);
taskRouter.get("/", authMiddleware, TaskController.getAll);
taskRouter.get("/:id", authMiddleware, TaskController.getById);
taskRouter.get(
	"/creator/:userId",
	authMiddleware,
	TaskController.getAllByUserId
);

module.exports = taskRouter;
