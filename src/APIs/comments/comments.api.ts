import CommentsResponse from "@customTypes/APIs/comments";
import getFormData from "@utils/helpers/getFormData";
import {CommentsParams} from "@customTypes/services/comments";
import $api from "../../axios";

class CommentsAPI {
	static fetchAll(id: string, {page, limit}: CommentsParams) {
		return $api.get<CommentsResponse>("comment/get_comments", {
			params: {source_uuid: id, page, per_page: limit}
		});
	}

	static createOne(id: string, text: string) {
		const data = getFormData({source_uuid: id, text});
		return $api.post("comment/create_comment", data);
	}

	static upvote(id: string) {
		const data = getFormData({comment_uuid: id});
		return $api.post("comment/upvote_comment", data);
	}
}

export default CommentsAPI;
