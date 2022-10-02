import {CreateIntegrationArgs} from "@customTypes/services/integrations";
import {
	setCells,
	setHeadCells,
	setIsConnected,
	setIsFetching,
	setProfileCells,
	setProfileHeadCells
} from "@store/integrations/integrations.slice";
import {AppDispatch} from "@store/index";
import IntegrationsAPI from "../../APIs/integrations/integrations.api";

class IntegrationsService {
	static async create({login, password}: CreateIntegrationArgs) {
		try {
			const response = await IntegrationsAPI.create({login, password});
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	}

	static get() {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await IntegrationsAPI.get();

				console.log(response);

				dispatch(setIsConnected(response.data.result.ok));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}

	static getMarks() {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await IntegrationsAPI.getMarks();
				const headCells = response.data.result.name;
				const cells = response.data.result.value;

				dispatch(setHeadCells(headCells));
				dispatch(setCells(cells));
			} catch (e) {
				console.log(e);
			}
		};
	}

	static getProfile() {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await IntegrationsAPI.getProfile();
				const headCells = response.data.result.name;
				const cells = response.data.result.value;

				dispatch(setProfileHeadCells(headCells));
				dispatch(setProfileCells(cells));
			} catch (e) {
				console.log(e);
			}
		};
	}

	static delete() {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await IntegrationsAPI.delete();

				console.log(response);

				dispatch(setIsConnected(response.data.result.ok));
			} catch (e) {
				console.log(e);
			}
		};
	}
}

export default IntegrationsService;
