import {createSlice} from "@reduxjs/toolkit";
import {
	AuthSliceState,
	SetIsAuth,
	SetIsFetching,
	SetUser
} from "@store/auth/auth.types";

export const initialState: AuthSliceState = {
	user: {username: "", avatar: ""},
	isAuth: true,
	isFetching: false
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: SetIsAuth) {
			state.isAuth = action.payload;
		},
		setUser(state, action: SetUser) {
			state.user = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		}
	}
});

export default authSlice.reducer;
export const {setIsAuth, setIsFetching, setUser} = authSlice.actions;
