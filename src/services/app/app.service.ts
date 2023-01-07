import {AppDispatch} from "@store/index";
import {setIsInitializing} from "@store/app/app.slice";
import {TasksParams} from "@customTypes/services/tasks";
import UsersService from "../users/users.service";
import TasksService from "../tasks/tasks.service";
import TagsService from "../tags/tags.service";
import CommentsService from "../comments/comments.service";

class AppService {
	static initializeProfilePage(id?: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsInitializing(true));
			try {
				await Promise.all([
					dispatch(UsersService.fetchOne(id)),
					dispatch(TasksService.fetchLatest(id))
				]);
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsInitializing(false));
			}
		};
	}

	static initializeTasksPage({limit}: TasksParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsInitializing(true));
			try {
				await Promise.all([
					dispatch(TasksService.fetchAll({page: 1, limit})),
					dispatch(TagsService.fetchAll())
				]);
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsInitializing(false));
			}
		};
	}

	static initializeTaskPage(id: string, commentsLimit: number) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsInitializing(true));
			try {
				await Promise.all([
					dispatch(TasksService.fetchOne(id)),
					dispatch(
						CommentsService.fetchAll(id, {limit: commentsLimit, page: 1})
					)
				]);
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsInitializing(false));
			}
		};
	}
}

export default AppService;
