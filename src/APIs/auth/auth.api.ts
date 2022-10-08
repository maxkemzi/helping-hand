import axios from "axios";
import AuthResponse from "@customTypes/APIs/auth";
import {LoginArgs, RegisterArgs} from "@customTypes/services/auth";
import getFormData from "@utils/helpers/getFormData";

class AuthAPI {
	static register({username, password}: RegisterArgs) {
		const data = getFormData({login: username, password});
		return axios.post<AuthResponse>(
			`${process.env.API_URL}auth/register`,
			data
		);
	}

	static login({username, password}: LoginArgs) {
		const data = getFormData({login: username, password});
		return axios.post<AuthResponse>(`${process.env.API_URL}auth/login`, data);
	}

	static check() {
		const data = getFormData({
			refresh_token: localStorage.getItem("refreshToken")
		});
		return axios.post<AuthResponse>(
			`${process.env.API_URL}auth/check_access_token`,
			data
		);
	}
}

export default AuthAPI;
