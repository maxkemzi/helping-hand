import {AppDispatch} from "@store/index";
import {
	addTasks,
	setHasMore,
	setIsCreating,
	setIsFetching as setTasksIsFetching,
	setTasks
} from "@store/tasks/tasks.slice";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import {
	setIsFetching as setTaskIsFetching,
	setTask
} from "@store/task/task.slice";
import TasksAPI from "../../APIs/tasks/tasks.api";

class TasksService {
	static fetchAll({page, limit}: TasksParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTasksIsFetching(true));
			try {
				const response = await TasksAPI.fetchAll({page, limit});
				const {tasks} = response.data.result;
				const totalPages = response.data.result.total_pages;
				const currentPage = response.data.result.page;
				console.log(response);

				dispatch(setHasMore(currentPage < totalPages));

				if (currentPage === 1) {
					dispatch(setTasks(tasks));
				} else {
					dispatch(addTasks(tasks));
				}
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTasksIsFetching(false));
			}
		};
	}

	static fetchOne(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTaskIsFetching(true));
			try {
				const response = await TasksAPI.fetchOne(id);
				const {task} = response.data.result;
				console.log(response);

				dispatch(setTask(task));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTaskIsFetching(false));
			}
		};
	}

	static createOne({
		title,
		text,
		tags,
		limit
	}: CreateTaskArgs & {limit: number}) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsCreating(true));
			try {
				await TasksAPI.createOne({title, text, tags});
				dispatch(this.fetchAll({page: 1, limit}));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsCreating(false));
			}
		};
	}
}

export default TasksService;
