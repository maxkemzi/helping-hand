import Tag from "@customTypes/entities/tag";
import User from "@customTypes/entities/user";

export type TaskStatus = "open" | "closed";

interface Task {
	title: string;
	status: TaskStatus;
	category: string;
	tags: Tag[];
	text: string;
	createdAt: string;
	updatedAt: string;
	upvotes: string[];
	id: string;
	creator: User;
}

export default Task;
