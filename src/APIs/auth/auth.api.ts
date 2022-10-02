import axios from "axios";
import AuthResponse from "@customTypes/APIs/auth";
import {LoginArgs} from "@customTypes/services/auth";
import getFormData from "@utils/helpers/getFormData";

class AuthAPI {
	static login({login, password}: LoginArgs) {
		const data = getFormData({login, password});
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
