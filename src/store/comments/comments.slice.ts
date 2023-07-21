import {createSlice} from "@reduxjs/toolkit";
import {
	CommentsSliceState,
	SetComments,
	SetHasMore,
	SetIsCreating,
	SetIsFetching,
	SetPage
} from "@store/comments/comments.types";

const initialState: CommentsSliceState = {
	comments: [],
	isFetching: false,
	isCreating: false,
	page: 1,
	limit: 6,
	hasMore: false,
	totalPages: 1,
	totalCount: 0,
	isVoting: false,
	shouldRefetch: false
};

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		setComments(state, action: SetComments) {
			state.comments = action.payload;
		},
		updateComment(state, action) {
			state.comments = state.comments.map(comment => {
				if (comment.id === action.payload.id) {
					return {...comment, ...action.payload};
				}

				return comment;
			});
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setIsVoting(state, action: SetIsFetching) {
			state.isVoting = action.payload;
		},
		setIsCreating(state, action: SetIsCreating) {
			state.isCreating = action.payload;
		},
		setPage(state, action: SetPage) {
			state.page = action.payload;
		},
		setHasMore(state, action: SetHasMore) {
			state.hasMore = action.payload;
		},
		setTotalPages(state, action: SetPage) {
			state.totalPages = action.payload;
		},
		setTotalCount(state, action: SetPage) {
			state.totalCount = action.payload;
		},
		refetch(state) {
			state.shouldRefetch = !state.shouldRefetch;
		}
	}
});

export default commentsSlice.reducer;
export const {
	setIsFetching,
	setComments,
	setPage,
	setTotalPages,
	setHasMore,
	setIsCreating,
	setTotalCount,
	setIsVoting,
	updateComment,
	refetch
} = commentsSlice.actions;
