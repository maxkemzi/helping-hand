import {RootState} from "@store/index";

export const getUsers = (state: RootState) => state.usersState.users;

export const getUsersPage = (state: RootState) => state.usersState.page;

export const getIsUsersFetching = (state: RootState) =>
	state.usersState.isFetching;

export const getHasMoreUsers = (state: RootState) => state.usersState.hasMore;

export const getUsersLimit = (state: RootState) => state.usersState.limit;
