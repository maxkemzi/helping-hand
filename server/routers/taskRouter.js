const {Router} = require("express");
const {TaskController} = require("../controllers");

const taskRouter = Router();

taskRouter.post("/", TaskController.create);
taskRouter.get("/", TaskController.getAll);
taskRouter.get("/:id", TaskController.getById);
taskRouter.get("/user/:userId", TaskController.getAllByUserId)

module.exports = taskRouter;
