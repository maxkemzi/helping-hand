import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask} from "@models/models";

interface TasksSliceState {
	tasks: ITask[];
	currentPage: number;
	limit: number;
	searchQuery: string;
	isFetching: boolean;
	hasMore: boolean;
	sortBy: {name: string; value: string};
}

const initialState: TasksSliceState = {
	tasks: [],
	currentPage: 1,
	limit: 10,
	searchQuery: "",
	isFetching: false,
	hasMore: false,
	sortBy: {
		name: "Все",
		value: ""
	}
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTasks(state, action: PayloadAction<never[]>) {
			state.tasks = action.payload;
		},
		addTasks(state, action: PayloadAction<never[]>) {
			state.tasks = [...state.tasks, ...action.payload];
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
		},
		setSortBy(state, action: PayloadAction<{name: string; value: string}>) {
			state.sortBy = action.payload;
		},
		setHasMore(state, action: PayloadAction<boolean>) {
			state.hasMore = action.payload;
		}
	}
});

export default tasksSlice.reducer;
export const {
	setIsFetching,
	setHasMore,
	setSortBy,
	setSearchQuery,
	setTasks,
	addTasks,
	setCurrentPage
} = tasksSlice.actions;
