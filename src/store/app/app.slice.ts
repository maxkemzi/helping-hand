import {createSlice} from "@reduxjs/toolkit";
import {AppSliceState, SetIsInitializing, SetTheme} from "@store/app/app.types";

// todo: Add proper synchronization with localStorage
export const initialState: AppSliceState = {
	isInitializing: true,
	theme:
		typeof window !== "undefined"
			? JSON.parse(localStorage.getItem("theme"))
			: null
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setIsInitializing(state, action: SetIsInitializing) {
			state.isInitializing = action.payload;
		},
		setTheme(state, action: SetTheme) {
			state.theme = action.payload;

			if (typeof window !== "undefined") {
				localStorage.setItem("theme", JSON.stringify(action.payload));
			}
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing, setTheme} = appSlice.actions;
