import axios from "axios";
import getFormData from "@utils/helpers/getFormData";
import AuthResponse from "@customTypes/APIs/auth";

const $api = axios.create({
	baseURL: process.env.API_URL
});

$api.interceptors.request.use(config => {
	config.headers.Bearer = localStorage.getItem("accessToken");
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
				const data = getFormData({
					refresh_token: localStorage.getItem("refreshToken")
				});
				const response = await axios.post<AuthResponse>(
					`${process.env.API_URL}auth/check_access_token`,
					data
				);

				localStorage.setItem(
					"accessToken",
					response.data.result.session.access_token
				);
				localStorage.setItem(
					"refreshToken",
					response.data.result.session.refresh_token
				);
				return await $api.request(originalRequest);
			} catch (e) {
				console.log("Not authorized!");
			}
		}
		throw error;
	}
);

export default $api;
