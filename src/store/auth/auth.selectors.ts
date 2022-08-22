import {RootState} from "@store/index";

export const getIsAuth = (state: RootState) => state.authState.isAuth;

export const getAuthUser = (state: RootState) => state.authState.user;

export const getIsAuthFetching = (state: RootState) =>
	state.authState.isFetching;
