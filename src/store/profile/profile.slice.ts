import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@customTypes/index";

export interface ProfileSliceState {
	profile: IUser;
	isFetching: boolean;
}

export const initialState: ProfileSliceState = {
	profile: {username: "", avatar: ""},
	isFetching: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: PayloadAction<IUser>) {
			state.profile = action.payload;
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const {setIsFetching, setProfile} = profileSlice.actions;
