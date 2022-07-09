import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import uaLocale from "../locales/ua.json";
import enLocale from "../locales/en.json";
import ruLocale from "../locales/ru.json";

i18n.use(initReactI18next).init({
	resources: {
		ua: {
			translation: uaLocale
		},
		en: {
			translation: enLocale
		},
		ru: {
			translation: ruLocale
		}
	},
	lng: localStorage.getItem("lang") || "ua",
	fallbackLng: "ua",
	interpolation: {
		escapeValue: false
	}
});
