import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Language, Theme} from "@customTypes/index";

interface AppSliceState {
	isInitializing: boolean;
	theme: Theme;
	language: Language;
}

const initialState: AppSliceState = {
	isInitializing: false,
	theme: JSON.parse(localStorage.getItem("theme")),
	language: "ua"
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setIsInitializing(state, action: PayloadAction<boolean>) {
			state.isInitializing = action.payload;
		},
		setTheme(state, action: PayloadAction<Theme>) {
			state.theme = action.payload;

			localStorage.setItem("theme", JSON.stringify(action.payload));
		},
		setLanguage(state, action: PayloadAction<Language>) {
			state.language = action.payload;
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing, setTheme, setLanguage} = appSlice.actions;
