import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AccentColor, Language} from "@customTypes/index";

interface AppSliceState {
	isInitializing: boolean;
	accentColor: string;
	language: Language;
}

// @ts-ignore
const initialState: AppSliceState = {
	isInitializing: false,
	accentColor: localStorage.getItem("accentColor"),
	language: "ua"
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setIsInitializing(state, action: PayloadAction<boolean>) {
			state.isInitializing = action.payload;
		},
		setAccentColor(state, action: PayloadAction<AccentColor>) {
			state.accentColor = action.payload;
			localStorage.setItem("accentColor", action.payload);
		},
		setLanguage(state, action: PayloadAction<Language>) {
			state.language = action.payload;
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing, setAccentColor, setLanguage} =
	appSlice.actions;
