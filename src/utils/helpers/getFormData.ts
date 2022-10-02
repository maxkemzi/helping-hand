const getFormData = (object: {[key: string]: string}) => {
	const formData = new FormData();
	Object.keys(object).forEach(key => formData.append(key, object[key]));
	return formData;
};

export default getFormData;
