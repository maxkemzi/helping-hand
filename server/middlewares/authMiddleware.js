const {ApiError} = require("../error");
const {
	auth: {tokens, user}
} = require("../__mocks__/index.json");

const authMiddleware = (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			throw new ApiError(403, "Not authorized.");
		}

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			throw new ApiError(403, "Not authorized.");
		}

		const accessTokenIsInvalid = accessToken !== tokens.access;
		if (accessTokenIsInvalid) {
			throw new ApiError(403, "Not authorized.");
		}

		req.user = user;
		next();
	} catch (e) {
		next(e);
	}
};

module.exports = authMiddleware;