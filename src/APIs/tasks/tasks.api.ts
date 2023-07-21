import {TaskResponse, TasksResponse} from "@customTypes/APIs/tasks";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import $api from "../../axios";

class TasksAPI {
	static fetchAll({page, limit, search, tags}: TasksParams) {
		return $api.get<TasksResponse>("/task", {
			params: {page, limit, search, tags}
		});
	}

	static fetchLatest(id: string, {limit}: TasksParams) {
		return $api.get<TasksResponse>(`/task/creator/${id}`, {params: {limit}});
	}

	static fetchOne(id: string) {
		return $api.get<TaskResponse>(`/task/${id}`);
	}

	static createOne({title, text, tags}: CreateTaskArgs) {
		return $api.post("/task", {title, text, tags});
	}

	static upvote(id: string) {
		return $api.post(`/task/upvote/${id}`);
	}
}

export default TasksAPI;
