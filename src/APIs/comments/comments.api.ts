import CommentsResponse from "@customTypes/APIs/comments";
import {CommentsParams} from "@customTypes/services/comments";
import $api from "../../axios";

class CommentsAPI {
	static fetchAll(taskId: string, {page, limit}: CommentsParams) {
		return $api.get<CommentsResponse>(`/comment/${taskId}`, {
			params: {page, limit}
		});
	}

	static createOne(taskId: string, text: string) {
		return $api.post(`/comment/${taskId}`, {text});
	}

	static upvote(id: string) {
		return $api.post(`/comment/upvote/${id}`);
	}
}

export default CommentsAPI;
