import {TagsResponse} from "@customTypes/APIs/tags";
import $api from "../../axios";

class TagsAPI {
	static fetchAll() {
		return $api.get<TagsResponse>("tag/get_all");
	}
}

export default TagsAPI;
