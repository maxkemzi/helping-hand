import {LoginArgs, RegisterArgs} from "@customTypes/services/auth";
import {
	setIsAuth,
	setIsFetching,
	setIsSubmitting,
	setUser
} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import AuthAPI from "../../APIs/auth/auth.api";

class AuthService {
	static register(
		{username, password}: RegisterArgs,
		onSuccess?: () => void,
		onError?: (e: any) => void
	) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsSubmitting(true));
			try {
				const response = await AuthAPI.register({username, password});
				const accessToken = response.data.result.session.access_token;
				const refreshToken = response.data.result.session.refresh_token;
				const user = response.data.result.user.profile;

				console.log(response);

				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);
				dispatch(setIsAuth(true));
				dispatch(setUser(user));
				onSuccess();
			} catch (e) {
				console.log(e);
				onError(e);
			} finally {
				dispatch(setIsSubmitting(false));
			}
		};
	}

	static login(
		{username, password}: LoginArgs,
		onSuccess?: () => void,
		onError?: (e: any) => void
	) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsSubmitting(true));
			try {
				const response = await AuthAPI.login({username, password});
				const accessToken = response.data.result.session.access_token;
				const refreshToken = response.data.result.session.refresh_token;
				const user = response.data.result.user.profile;

				console.log(response);

				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);
				dispatch(setIsAuth(true));
				dispatch(setUser(user));
				onSuccess();
			} catch (e) {
				console.log(e);
				onError(e);
			} finally {
				dispatch(setIsSubmitting(false));
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

	static logout(onSuccess?: () => void) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsSubmitting(true));
			try {
				await AuthAPI.logout();
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
				dispatch(setIsAuth(false));
				dispatch(setUser({username: "", photo: ""}));
				onSuccess();
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsSubmitting(false));
			}
		};
	}
}

export default AuthService;
