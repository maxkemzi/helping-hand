import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITheme, Language} from "@customTypes/index";

export interface AppSliceState {
	isInitializing: boolean;
	theme: ITheme;
	language: Language;
}

// todo: Add proper synchronization with localStorage
export const initialState: AppSliceState = {
	isInitializing: false,
	theme:
		typeof window !== "undefined"
			? JSON.parse(localStorage.getItem("theme"))
			: null,
	language: "ua"
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setIsInitializing(state, action: PayloadAction<boolean>) {
			state.isInitializing = action.payload;
		},
		setTheme(state, action: PayloadAction<ITheme>) {
			state.theme = action.payload;

			if (typeof window !== "undefined") {
				localStorage.setItem("theme", JSON.stringify(action.payload));
			}
		},
		setLanguage(state, action: PayloadAction<Language>) {
			state.language = action.payload;
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing, setTheme, setLanguage} = appSlice.actions;
