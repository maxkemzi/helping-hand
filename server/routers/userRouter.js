const {Router} = require("express");
const {UserController} = require("../controllers");

const userRouter = Router();

userRouter.get("/:id", UserController.getById);
userRouter.get("/:id/statistics", UserController.getStatisticsById);

module.exports = userRouter;
