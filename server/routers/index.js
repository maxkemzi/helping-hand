const {Router} = require("express");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");
const commentRouter = require("./commentRouter");

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/task", taskRouter);
router.use("/comment", commentRouter);

module.exports = router;
