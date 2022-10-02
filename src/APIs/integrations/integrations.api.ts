import getFormData from "@utils/helpers/getFormData";
import {CreateIntegrationArgs} from "@customTypes/services/integrations";
import $api from "../../axios";

class IntegrationsAPI {
	static create({login, password}: CreateIntegrationArgs) {
		const data = getFormData({login, password});
		return $api.post("knu_integration/create_integration", data);
	}

	static get() {
		return $api.get("knu_integration/get_integration");
	}

	static getMarks() {
		return $api.get("knu_integration/get_marks");
	}

	static getProfile() {
		return $api.get("knu_integration/get_profile");
	}

	static delete() {
		return $api.post("knu_integration/delete_integration");
	}
}

export default IntegrationsAPI;
