const {ApiError} = require("../error");

const errorMiddleware = (err, req, res, next) => {
	console.log(err);

	if (err instanceof ApiError) {
		res.status(err.status).json({message: err.message});
	} else {
		res.status(500).json({message: "Something went wrong"});
	}
};

module.exports = errorMiddleware;
