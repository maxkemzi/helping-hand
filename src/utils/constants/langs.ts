export type Lang = "en" | "ru" | "ua";

const supportedLangs: {[key in Lang]: string} = {
	en: "EN",
	ua: "UA",
	ru: "RU"
};

export default supportedLangs;
