const createPages = (totalPages: number, page: number) => {
	const pages = [];

	if (totalPages > 10) {
		if (page > 5) {
			for (let i = page - 4; i <= page + 5; i += 1) {
				pages.push(i);
				if (i === totalPages) break;
			}
		} else {
			for (let i = 1; i <= 10; i += 1) {
				pages.push(i);
				if (i === totalPages) break;
			}
		}
	} else {
		for (let i = 1; i <= totalPages; i += 1) {
			pages.push(i);
		}
	}

	return pages;
};

export default createPages;
