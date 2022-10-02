import Comment from "@customTypes/entities/comment";

interface CommentsResponse {
	result: {
		total_count: number;
		page: number;
		per_page: number;
		total_pages: number;
		comments: Comment[];
	};
	error: {
		ok: boolean;
		message: string;
	};
}

export default CommentsResponse;
