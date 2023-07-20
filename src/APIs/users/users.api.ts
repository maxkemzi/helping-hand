import {UserResponse, StatisticsResponse} from "@customTypes/APIs/user";
import $api from "../../axios";

class UsersAPI {
	static fetchOne(id?: string) {
		return $api.get<UserResponse>(`/user/${id}`);
	}

	static fetchStatistics(id?: string) {
		return $api.get<StatisticsResponse>(`/user/${id}/statistics`);
	}
}

export default UsersAPI;
