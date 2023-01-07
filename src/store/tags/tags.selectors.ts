import {RootState} from "@store/index";

export const getTags = (state: RootState) => state.tagsState.tags;

export const getIsTagsFetching = (state: RootState) =>
	state.tagsState.isFetching;
