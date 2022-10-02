import Tag from "@customTypes/entities/tag";
import User from "@customTypes/entities/user";

export type TaskStatus = "open" | "closed";

interface Task {
	title: string;
	status: TaskStatus;
	score: number;
	positive_score: number;
	negative_score: number;
	category: string;
	tags: Tag[];
	text: string;
	created_at: string;
	updated_at: string;
	uuid: string;
	owner: {
		profile: User;
	};
}

export default Task;
