const parseGetParams = ({page, limit, search}) => {
	const params = {};

	params.page = page ? Number(page) : 1;
	params.limit = limit ? Number(limit) : 10;
	params.search = search || "";
	const offset = (page - 1) * limit;

	return {...params, offset};
}

module.exports = parseGetParams;
