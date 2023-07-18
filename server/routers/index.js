const {Router} = require("express");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/task", taskRouter);

module.exports = router;
