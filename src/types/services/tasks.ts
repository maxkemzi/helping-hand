import Tag from "@customTypes/entities/tag";

export interface TasksParams {
	page: number;
	limit: number;
	search?: string;
}

export interface CreateTaskArgs {
	title: string;
	text: string;
	tags: Tag[];
}
