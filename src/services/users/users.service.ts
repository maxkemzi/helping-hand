import {AppDispatch} from "@store/index";
import {
	setIsFetching,
	setProfile,
	setStatistics
} from "@store/profile/profile.slice";
import UsersAPI from "../../APIs/users/users.api";

class UsersService {
	static fetchOne(id?: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await UsersAPI.fetchOne(id);
				const {
					user: {profile, statistics}
				} = response.data.result;

				dispatch(setProfile(profile));
				dispatch(
					setStatistics({
						commentCount: statistics.comment_count,
						taskCount: statistics.task_count
					})
				);
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}
}

export default UsersService;
