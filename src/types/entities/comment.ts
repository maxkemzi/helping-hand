import User from "@customTypes/entities/user";
import Task from "./task";

interface Comment {
	text: string;
	user: User;
	task: Task;
	id: string;
	upvotes: string[];
	downvotes: string[];
	createdAt: string;
	updatedAt: string;
}

export default Comment;
