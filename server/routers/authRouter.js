const {Router} = require("express");
const {AuthController} = require("../controllers");

const authRouter = Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post("/refresh", AuthController.refresh);
authRouter.post("/logout", AuthController.logout);

module.exports = authRouter;
