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

				dispatch(setProfile(response.data));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}

	static fetchStatistics(id?: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await UsersAPI.fetchStatistics(id);
				dispatch(setStatistics(response.data));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}
}

export default UsersService;
