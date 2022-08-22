import {RootState} from "@store/index";

export const getTask = (state: RootState) => state.taskState.task;

export const getIsTaskFetching = (state: RootState) =>
	state.taskState.isFetching;
