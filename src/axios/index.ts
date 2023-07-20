import axios from "axios";
import AuthResponse from "@customTypes/APIs/auth";

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.API_URL
});

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

$api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config.isRetry
		) {
			originalRequest.isRetry = true;
			try {
				const response = await axios.get<AuthResponse>(
					`${process.env.API_URL}/auth/check`,
					{withCredentials: true}
				);
				localStorage.setItem("token", response.data.token);

				return await $api.request(originalRequest);
			} catch (e) {
				console.log("Not authorized!");
			}
		}
		throw error;
	}
);

export default $api;
