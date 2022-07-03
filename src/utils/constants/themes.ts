import {ITheme} from "@customTypes/index";

export const BlueTheme: ITheme = {
	name: "blue",
	styles: {
		"color-accent": "#009AD2",
		"color-accent-darker": "#0087b8",
		"color-accent-transparent": "rgba(0, 154, 210, .2)"
	}
};

export const GreenTheme: ITheme = {
	name: "green",
	styles: {
		"color-accent": "#00D4C3",
		"color-accent-darker": "#00bbac",
		"color-accent-transparent": "rgba(0, 212, 195, .2)"
	}
};

export default [GreenTheme, BlueTheme];
