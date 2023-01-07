import {
	LatestTasksResponse,
	TaskResponse,
	TasksResponse
} from "@customTypes/APIs/tasks";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import getFormData from "@utils/helpers/getFormData";
import $api from "../../axios";

class TasksAPI {
	static fetchAll({page, limit, search}: TasksParams) {
		return $api.get<TasksResponse>("task/get_tasks", {
			params: {page, per_page: limit, ...(search && {text: search})}
		});
	}

	static fetchLatest(id?: string) {
		return $api.get<LatestTasksResponse>("user/get_latest_tasks", {
			params: {user_uuid: id}
		});
	}

	static search({page, limit, search}: TasksParams) {
		return $api.get<TasksResponse>("task/search_task", {
			params: {page, per_page: limit, text: search}
		});
	}

	static fetchOne(id: string) {
		return $api.get<TaskResponse>("task/get_task", {params: {task_uuid: id}});
	}

	static createOne({title, text, tags, course, subject}: CreateTaskArgs) {
		const data = getFormData({
			title,
			text,
			tags: JSON.stringify(tags),
			course: JSON.stringify(course),
			subject: JSON.stringify(subject)
		});
		return $api.post("task/create_task", data);
	}

	static upvote(id: string) {
		const data = getFormData({task_uuid: id});
		return $api.post("task/upvote_task", data);
	}
}

export default TasksAPI;
