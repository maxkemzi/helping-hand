import Task from "@customTypes/entities/task";
import {PayloadAction} from "@reduxjs/toolkit";

export interface TasksSliceState {
	tasks: Task[];
	page: number;
	limit: number;
	searchQuery: string;
	isFetching: boolean;
	hasMore: boolean;
	sortBy: {name: string; value: string};
}

export type SetTasks = PayloadAction<Task[]>;

export type AddTasks = PayloadAction<Task[]>;

export type SetIsFetching = PayloadAction<boolean>;

export type SetPage = PayloadAction<number>;

export type SetSearchQuery = PayloadAction<string>;

export type SetSortBy = PayloadAction<{name: string; value: string}>;

export type SetHasMore = PayloadAction<boolean>;
