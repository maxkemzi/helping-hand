const {auth: {tokens, user}} = require("../__mocks__/index.json");
const {ApiError} = require("../error");

class AuthController {
	static register(req, res, next) {
		try {
			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({tokens, user});
		} catch (e) {
			next(e);
		}
	}

	static login(req, res, next) {
		try {
			const {username, password} = req.body;

			const usernameIsValid = user.username === username;
			const passwordIsValid = user.password === password;

			const authDataIsValid = usernameIsValid && passwordIsValid;
			if (!authDataIsValid) {
				throw new ApiError(404, "Username or password is invalid.");
			}

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({tokens, user});
		} catch (e) {
			next(e);
		}
	}

	static refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies;

			const tokenIsInvalid = refreshToken !== tokens.refresh;
			if (tokenIsInvalid) {
				throw new ApiError(401, "Not authorized.");
			}

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, tokens});
		} catch (e) {
			next(e);
		}
	}

	static logout(req, res, next) {
		try {
			res.clearCookie("refreshToken");
			res.json({success: true});
		} catch (e) {
			next(e);
		}
	}
}

module.exports = AuthController;
