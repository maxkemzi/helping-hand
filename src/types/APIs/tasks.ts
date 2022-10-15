import Task from "@customTypes/entities/task";
import {ServerError} from "@customTypes/APIs/error";

export interface TasksResponse {
	result: {
		total_count: number;
		page: number;
		per_page: number;
		total_pages: number;
		tasks: Task[];
	};
	error: ServerError;
}

export interface TaskResponse {
	result: {
		task: Task;
	};
	error: ServerError;
}
