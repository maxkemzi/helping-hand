import {TaskResponse, TasksResponse} from "@customTypes/APIs/tasks";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import getFormData from "@utils/helpers/getFormData";
import $api from "../../axios";

class TasksAPI {
	static fetchAll({page, limit}: TasksParams) {
		return $api.get<TasksResponse>("task/get_tasks", {
			params: {page, per_page: limit}
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

	static createOne({title, text, tags}: CreateTaskArgs) {
		const data = getFormData({
			title,
			text,
			tags: JSON.stringify(tags)
		});
		return $api.post("task/create_task", data);
	}
}

export default TasksAPI;
