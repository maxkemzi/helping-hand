import {RootState} from "@store/index";

export const getProfile = (state: RootState) => state.profileState.profile;

export const getIsProfileFetching = (state: RootState) =>
	state.profileState.isFetching;
