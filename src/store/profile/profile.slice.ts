import {createSlice} from "@reduxjs/toolkit";
import {
	ProfileSliceState,
	SetIsFetching,
	SetProfile
} from "@store/profile/profile.types";

export const initialState: ProfileSliceState = {
	profile: {username: "", photo: ""},
	isFetching: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: SetProfile) {
			state.profile = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const {setIsFetching, setProfile} = profileSlice.actions;
