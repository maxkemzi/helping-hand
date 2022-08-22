import User from "@customTypes/entities/user";
import Tag from "@customTypes/entities/tag";

interface Task {
	title: string;
	tags: Tag[];
	description: string;
	creator: User;
	id: string;
	date: string;
	isActive: boolean;
}

export default Task;
