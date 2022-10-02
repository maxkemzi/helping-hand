import {createSlice} from "@reduxjs/toolkit";
import {
	AddTasks,
	SetHasMore,
	SetIsCreating,
	SetIsFetching,
	SetPage,
	SetSearchQuery,
	SetSortBy,
	SetTasks,
	TasksSliceState
} from "@store/tasks/tasks.types";

const initialState: TasksSliceState = {
	tasks: [],
	page: 1,
	limit: 6,
	searchQuery: "",
	isFetching: false,
	hasMore: false,
	isCreating: false,
	sortBy: {
		name: "Все",
		value: ""
	}
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTasks(state, action: SetTasks) {
			state.tasks = action.payload;
		},
		addTasks(state, action: AddTasks) {
			state.tasks = [...state.tasks, ...action.payload];
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setPage(state, action: SetPage) {
			state.page = action.payload;
		},
		setSearchQuery(state, action: SetSearchQuery) {
			state.searchQuery = action.payload;
		},
		setSortBy(state, action: SetSortBy) {
			state.sortBy = action.payload;
		},
		setHasMore(state, action: SetHasMore) {
			state.hasMore = action.payload;
		},
		setIsCreating(state, action: SetIsCreating) {
			state.isCreating = action.payload;
		}
	}
});

export default tasksSlice.reducer;
export const {
	setIsFetching,
	setHasMore,
	setSortBy,
	setSearchQuery,
	setIsCreating,
	setTasks,
	addTasks,
	setPage
} = tasksSlice.actions;
