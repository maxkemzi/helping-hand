import {PayloadAction} from "@reduxjs/toolkit";
import Task from "@customTypes/entities/task";

export interface TaskSliceState {
	task: Task;
	isFetching: boolean;
}

export type SetTask = PayloadAction<Task>;

export type SetIsFetching = PayloadAction<boolean>;
