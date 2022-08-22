import axios from "axios";

const $api = axios.create({
	baseURL: process.env.API_URL
});

$api.interceptors.request.use(
	config =>
		// TODO: Attach token
		config
);

export default $api;
