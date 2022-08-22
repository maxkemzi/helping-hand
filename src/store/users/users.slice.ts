import {createSlice} from "@reduxjs/toolkit";
import {
	AddUsers,
	SetHasMore,
	SetIsFetching,
	SetPage,
	SetUsers,
	UsersSliceState
} from "@store/users/users.types";

const initialState: UsersSliceState = {
	users: [],
	isFetching: false,
	hasMore: false,
	limit: 5,
	page: 1
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsers(state, action: SetUsers) {
			state.users = action.payload;
		},
		addUsers(state, action: AddUsers) {
			state.users = [...state.users, ...action.payload];
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setPage(state, action: SetPage) {
			state.page = action.payload;
		},
		setHasMore(state, action: SetHasMore) {
			state.hasMore = action.payload;
		}
	}
});

export default usersSlice.reducer;
export const {setUsers, addUsers, setIsFetching, setPage, setHasMore} =
	usersSlice.actions;
