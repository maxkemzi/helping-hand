import User from "@customTypes/entities/user";

export type CommentVote = "up" | "down";

interface Comment {
	text: string;
	score: number;
	positive_score: number;
	negative_score: number;
	owner: {profile: User};
	source: string;
	uuid: string;
	my_vote: {
		post: string;
		user: string;
		vote: CommentVote;
	};
}

export default Comment;
