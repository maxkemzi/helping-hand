import Task from "@customTypes/entities/task";

export interface TasksResponse {
	result: {
		total_count: number;
		page: number;
		per_page: number;
		total_pages: number;
		tasks: Task[];
	};
	error: {
		ok: boolean;
		message: string;
	};
}

export interface TaskResponse {
	result: {
		task: Task;
	};
	error: {
		ok: boolean;
		message: string;
	};
}
