import {TaskResponse, TasksResponse} from "@customTypes/APIs/tasks";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import $api from "../../axios";

class TasksAPI {
	static fetchAll({page, limit, search}: TasksParams) {
		return $api.get<TasksResponse>("/task", {params: {page, limit, search}});
	}

	static fetchLatest(id?: string) {
		return $api.get<TasksResponse>(`/task/creator/${id}`);
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
