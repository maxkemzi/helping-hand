import {AppDispatch} from "@store/index";
import {
	setComments,
	setHasMore,
	setIsCreating,
	setIsFetching,
	setIsVoting,
	setPage,
	setTotalCount,
	setTotalPages,
	updateComment
} from "@store/comments/comments.slice";
import {CommentsParams} from "@customTypes/services/comments";
import CommentsAPI from "../../APIs/comments/comments.api";

class CommentsService {
	static fetchAll(id: string, {page, limit}: CommentsParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await CommentsAPI.fetchAll(id, {page, limit});
				const {comments} = response.data.result;
				const totalPages = response.data.result.total_pages;
				const currentPage = response.data.result.page;
				const totalCount = response.data.result.total_count;

				console.log(response);
				dispatch(setPage(currentPage));
				dispatch(setTotalCount(totalCount));
				dispatch(setTotalPages(totalPages));
				dispatch(setHasMore(currentPage < totalPages));
				dispatch(setComments(comments));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}

	static createOne(id: string, text: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsCreating(true));
			try {
				await CommentsAPI.createOne(id, text);
				dispatch(this.fetchAll(id, {page: 1, limit: 6}));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsCreating(false));
			}
		};
	}

	static upvote(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsVoting(true));
			try {
				const response = await CommentsAPI.upvote(id);
				console.log(response);
				const {comment} = response.data.result;
				dispatch(updateComment(comment));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsVoting(false));
			}
		};
	}
}

export default CommentsService;
