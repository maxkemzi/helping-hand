const getParsedDate = (date: string) =>
	new Date(date).toISOString().substring(0, 10);

export default getParsedDate;
