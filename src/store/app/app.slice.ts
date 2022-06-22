import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AccentColor} from "@customTypes/index";

interface AppSliceState {
	isInitializing: boolean;
	accentColor: string;
}

// @ts-ignore
const initialState: AppSliceState = {
	isInitializing: false,
	accentColor: localStorage.getItem("accentColor")
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
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing, setAccentColor} = appSlice.actions;
