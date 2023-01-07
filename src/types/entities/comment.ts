import {VoteStatus} from "@customTypes/APIs/global";
import User from "@customTypes/entities/user";

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
		vote: VoteStatus;
	};
}

export default Comment;
