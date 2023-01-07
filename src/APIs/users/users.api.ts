import {UserResponse} from "@customTypes/APIs/user";
import $api from "../../axios";

class UsersAPI {
	static fetchOne(id?: string) {
		return $api.get<UserResponse>("user/get_user", {params: {user_uuid: id}});
	}
}

export default UsersAPI;
