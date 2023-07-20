const {ApiError} = require("../error");
const {TokenService} = require("../services");

const authMiddleware = async (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			throw new ApiError(403, "Not authorized.");
		}

		const token = authorizationHeader.split(" ")[1];
		if (!token) {
			throw new ApiError(403, "Not authorized.");
		}

		const tokenIsInvalid = !(await TokenService.isValid(token));
		if (tokenIsInvalid) {
			throw new ApiError(403, "Not authorized.");
		}

		const {user} = await TokenService.getByToken(token);
		req.user = user;
		next();
	} catch (e) {
		next(e);
	}
};

module.exports = authMiddleware;