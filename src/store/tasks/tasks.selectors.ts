import {RootState} from "@store/index";

export const getTasks = (state: RootState) => state.tasksState.tasks;

export const getTasksPage = (state: RootState) => state.tasksState.page;

export const getTasksLimit = (state: RootState) => state.tasksState.limit;

export const getTasksSearchQuery = (state: RootState) =>
	state.tasksState.searchQuery;

export const getIsTasksFetching = (state: RootState) =>
	state.tasksState.isFetching;

export const getIsTaskCreating = (state: RootState) =>
	state.tasksState.isCreating;

export const getHasMoreTasks = (state: RootState) => state.tasksState.hasMore;
