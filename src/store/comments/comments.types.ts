import {PayloadAction} from "@reduxjs/toolkit";
import Comment from "@customTypes/entities/comment";

export interface CommentsSliceState {
	comments: Comment[];
	isFetching: boolean;
	isCreating: boolean;
	isVoting: boolean;
	page: number;
	hasMore: boolean;
	limit: number;
	totalPages: number;
	totalCount: number;
	shouldRefetch: boolean;
}

export type SetComments = PayloadAction<Comment[]>;

export type SetPage = PayloadAction<number>;

export type SetHasMore = PayloadAction<boolean>;

export type SetIsFetching = PayloadAction<boolean>;

export type SetIsCreating = PayloadAction<boolean>;
