import axios from "axios";
import AuthResponse from "@customTypes/APIs/auth";
import {LoginArgs, RegisterArgs} from "@customTypes/services/auth";
import $api from "../../axios";

class AuthAPI {
	static register({username, password}: RegisterArgs) {
		return $api.post<AuthResponse>("/auth/register", {
			username,
			password
		});
	}

	static login({username, password}: LoginArgs) {
		return $api.post<AuthResponse>("/auth/login", {
			username,
			password
		});
	}

	static check() {
		return axios.get<AuthResponse>(`${process.env.API_URL}/auth/check`, {
			withCredentials: true
		});
	}

	static logout() {
		return $api.post("/auth/logout");
	}
}

export default AuthAPI;
