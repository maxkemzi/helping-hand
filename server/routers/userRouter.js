const {Router} = require("express");
const {UserController} = require("../controllers");

const userRouter = Router();

userRouter.get("/:id", UserController.getById);

module.exports = userRouter;
