import {LoginArgs} from "@customTypes/services/auth";
import {setIsAuth, setIsFetching, setUser} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import AuthAPI from "../../APIs/auth/auth.api";

class AuthService {
	static login({login, password}: LoginArgs) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await AuthAPI.login({login, password});
				const accessToken = response.data.result.session.access_token;
				const refreshToken = response.data.result.session.refresh_token;
				const user = response.data.result.user.profile;

				console.log(response);

				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);
				dispatch(setIsAuth(true));
				dispatch(setUser(user));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}

	static check() {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await AuthAPI.check();
				console.log(response);
				const accessToken = response.data.result.session.access_token;
				const refreshToken = response.data.result.session.refresh_token;
				const user = response.data.result.user.profile;

				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);
				dispatch(setIsAuth(true));
				dispatch(setUser(user));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}
}

export default AuthService;
