import {AppDispatch} from "@store/index";
import {setIsFetching, setTags} from "@store/tags/tags.slice";
import TagsAPI from "../../APIs/tags/tags.api";

class TagsService {
	static fetchAll() {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await TagsAPI.fetchAll();
				const {tags} = response.data.result;

				dispatch(setTags(tags));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}
}

export default TagsService;
