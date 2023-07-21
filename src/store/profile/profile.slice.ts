import {createSlice} from "@reduxjs/toolkit";
import {
	ProfileSliceState,
	SetIsFetching,
	SetProfile,
	SetStatistics
} from "@store/profile/profile.types";

export const initialState: ProfileSliceState = {
	profile: {username: "", photo: "", description: "", id: ""},
	statistics: {
		taskCount: 0,
		commentCount: 0
	},
	isFetching: false,
	isStatisticsFetching: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: SetProfile) {
			state.profile = action.payload;
		},
		setStatistics(state, action: SetStatistics) {
			state.statistics = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setStatisticsIsFetching(state, action: SetIsFetching) {
			state.isStatisticsFetching = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const {
	setIsFetching,
	setProfile,
	setStatistics,
	setStatisticsIsFetching
} = profileSlice.actions;
