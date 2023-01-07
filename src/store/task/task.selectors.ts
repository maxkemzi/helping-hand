import {RootState} from "@store/index";

export const getTask = (state: RootState) => state.taskState.task;

export const getIsTaskFetching = (state: RootState) =>
	state.taskState.isFetching;

export const getIsTaskVoting = (state: RootState) => state.taskState.isVoting;
