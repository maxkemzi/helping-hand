import {RootState} from "@store/index";
import {ProfileStatistics} from "@store/profile/profile.types";

export const getProfile = (state: RootState) => state.profileState.profile;

export const getProfileStatistics = (state: RootState): ProfileStatistics =>
	state.profileState.statistics;

export const getIsProfileFetching = (state: RootState) =>
	state.profileState.isFetching;

export const getIsStatisticsFetching = (state: RootState) =>
	state.profileState.isStatisticsFetching;
