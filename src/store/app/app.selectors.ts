import {RootState} from "@store/index";

export const getIsAppInitializing = (state: RootState) =>
	state.appState.isInitializing;

export const getAppTheme = (state: RootState) => state.appState.theme;
