import Task from "@customTypes/entities/task";

export interface TasksResponse {
	page: number;
	totalPages: number;
	totalCount: number;
	limit: number;
	tasks: Task[];
}

export type TaskResponse = Task;
