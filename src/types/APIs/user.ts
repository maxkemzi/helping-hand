import User from "@customTypes/entities/user";

export interface UserResponse {
	result: {
		user: {
			profile: User;
			statistics: {task_count: number; comment_count: number};
		};
	};
	error: {
		ok: boolean;
		message: string;
	};
}
