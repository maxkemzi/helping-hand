import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppSliceState {
	isInitializing: boolean;
}

const initialState: AppSliceState = {
	isInitializing: false
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setIsInitializing(state, action: PayloadAction<boolean>) {
			state.isInitializing = action.payload;
		}
	}
});

export default appSlice.reducer;
export const {setIsInitializing} = appSlice.actions;
