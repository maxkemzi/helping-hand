import Comment from "@customTypes/entities/comment";

interface CommentsResponse {
	comments: Comment[];
	totalPages: number;
	page: number;
	totalCount: number;
	limit: number;
}

export default CommentsResponse;
