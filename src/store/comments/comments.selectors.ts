import {RootState} from "@store/index";

export const getComments = (state: RootState) => state.commentsState.comments;

export const getIsCommentsFetching = (state: RootState) =>
	state.commentsState.isFetching;

export const getIsCommentCreating = (state: RootState) =>
	state.commentsState.isCreating;

export const getIsCommentVoting = (state: RootState) =>
	state.commentsState.isVoting;

export const getCommentsPage = (state: RootState) => state.commentsState.page;

export const getCommentsLimit = (state: RootState) => state.commentsState.limit;

export const getCommentsTotalPages = (state: RootState) =>
	state.commentsState.totalPages;

export const getCommentsTotalCount = (state: RootState) =>
	state.commentsState.totalCount;

export const getHasMoreComments = (state: RootState) =>
	state.commentsState.hasMore;
