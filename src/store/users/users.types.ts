import User from "@customTypes/entities/user";
import {PayloadAction} from "@reduxjs/toolkit";

export interface UsersSliceState {
	users: User[];
	isFetching: boolean;
	hasMore: boolean;
	limit: number;
	page: number;
}

export type SetUsers = PayloadAction<User[]>;

export type AddUsers = PayloadAction<User[]>;

export type SetIsFetching = PayloadAction<boolean>;

export type SetPage = PayloadAction<number>;

export type SetHasMore = PayloadAction<boolean>;
