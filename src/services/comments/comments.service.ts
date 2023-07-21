import {AppDispatch} from "@store/index";
import {
	refetch,
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
				const {
					comments,
					totalPages,
					page: pageFromApi,
					totalCount
				} = response.data;

				console.log(response);
				dispatch(setPage(pageFromApi));
				dispatch(setTotalCount(totalCount));
				dispatch(setTotalPages(totalPages));
				dispatch(setHasMore(pageFromApi < totalPages));
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
				dispatch(refetch());
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
				dispatch(updateComment(response.data));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsVoting(false));
			}
		};
	}
}

export default CommentsService;
