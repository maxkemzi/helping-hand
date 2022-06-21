import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "@customTypes/index";

interface UsersSliceState {
	users: IUser[];
	isFetching: boolean;
	hasMore: boolean;
	limit: number;
	currentPage: number;
}

const initialState: UsersSliceState = {
	users: [],
	isFetching: false,
	hasMore: false,
	limit: 5,
	currentPage: 1
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<never[]>) {
			state.users = action.payload;
		},
		addUsers(state, action: PayloadAction<never[]>) {
			state.users = [...state.users, ...action.payload];
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setHasMore(state, action: PayloadAction<boolean>) {
			state.hasMore = action.payload;
		}
	}
});

export default usersSlice.reducer;
export const {setUsers, addUsers, setIsFetching, setCurrentPage, setHasMore} =
	usersSlice.actions;
