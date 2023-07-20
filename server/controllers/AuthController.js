const {ApiError} = require("../error");
const {UserService, TokenService} = require("../services");

class AuthController {
	static async register(req, res, next) {
		try {
			const {username, password} = req.body;

			const userByUsername = await UserService.getByUsername(username);
			const userByUsernameExists = userByUsername != null;
			if (userByUsernameExists) {
				throw new ApiError(
					400,
					`User with username of ${username} already exists.`
				);
			}

			const user = await UserService.create({username, password});
			const {token} = await TokenService.create(user);

			res.cookie("token", token, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({token, user});
		} catch (e) {
			next(e);
		}
	}

	static async login(req, res, next) {
		try {
			const {username, password} = req.body;

			const user = await UserService.getByUsername(username);

			const usernameDoesNotExist = user == null;
			if (usernameDoesNotExist) {
				throw new ApiError(
					400,
					`User with username of ${username} doesn't exist.`
				);
			}

			const passwordIsWrong = user.password !== password;
			if (passwordIsWrong) {
				throw new ApiError(400, "Wrong password.");
			}

			const {token} = await TokenService.createOrUpdate(user);

			res.cookie("token", token, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({token, user});
		} catch (e) {
			next(e);
		}
	}

	static async check(req, res, next) {
		try {
			const {token: tokenCookie} = req.cookies;

			const tokenIsInvalid = !(await TokenService.isValid(tokenCookie));
			if (tokenIsInvalid) {
				throw new ApiError(401, "Not authorized.");
			}

			const {token, user} = await TokenService.getByToken(tokenCookie);

			res.cookie("token", token, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, token});
		} catch (e) {
			next(e);
		}
	}

	static async logout(req, res, next) {
		try {
			const {token} = req.cookies;

			await TokenService.deleteByToken(token);

			res.clearCookie("token");
			res.json({success: true});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = AuthController;
