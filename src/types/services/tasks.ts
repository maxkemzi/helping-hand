export interface TasksParams {
	page?: number;
	limit: number;
	search?: string;
}

export interface CreateTaskArgs {
	title: string;
	text: string;
	tags: string[];
	course: string[];
	subject: string[];
}
