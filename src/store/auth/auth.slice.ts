import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@customTypes/index";

interface AuthSliceState {
	user: IUser;
	isAuth: boolean;
	isFetching: boolean;
}

const initialState: AuthSliceState = {
	user: {username: "", avatar: ""},
	isAuth: false,
	isFetching: false
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		}
	}
});

export default authSlice.reducer;
export const {setIsAuth, setIsFetching, setUser} = authSlice.actions;