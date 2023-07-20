import {LoginArgs, RegisterArgs} from "@customTypes/services/auth";
import {
	resetUser,
	setIsAuth,
	setIsFetching,
	setIsSubmitting,
	setUser
} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import APIError from "@customTypes/APIs/error";
import AuthAPI from "../../APIs/auth/auth.api";

class AuthService {
	static register(
		{username, password}: RegisterArgs,
		onSuccess?: () => void,
		onError?: (e: APIError) => void
	) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsSubmitting(true));
			try {
				const response = await AuthAPI.register({username, password});
				const {token, user} = response.data;

				console.log(response);

				localStorage.setItem("token", token);
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
		onError?: (e: APIError) => void
	) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsSubmitting(true));
			try {
				const response = await AuthAPI.login({username, password});
				const {token, user} = response.data;

				console.log(response);

				localStorage.setItem("token", token);
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
				const {token, user} = response.data;

				console.log(response);

				localStorage.setItem("token", token);
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
				localStorage.removeItem("token");
				dispatch(setIsAuth(false));
				dispatch(resetUser());
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
