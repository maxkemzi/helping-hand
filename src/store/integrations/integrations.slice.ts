import {createSlice} from "@reduxjs/toolkit";
import {
	IntegrationsSliceState,
	SetIsConnected,
	SetIsFetching
} from "@store/integrations/integrations.types";

export const initialState: IntegrationsSliceState = {
	isConnected: false,
	isFetching: false,
	headCells: [],
	cells: [],
	profileHeadCells: [],
	profileCells: []
};

const integrationsSlice = createSlice({
	name: "integrations",
	initialState,
	reducers: {
		setIsConnected(state, action: SetIsConnected) {
			state.isConnected = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setHeadCells(state, action) {
			state.headCells = action.payload;
		},
		setCells(state, action) {
			state.cells = action.payload;
		},
		setProfileHeadCells(state, action) {
			state.profileHeadCells = action.payload;
		},
		setProfileCells(state, action) {
			state.profileCells = action.payload;
		}
	}
});

export default integrationsSlice.reducer;
export const {
	setIsConnected,
	setIsFetching,
	setProfileHeadCells,
	setProfileCells,
	setHeadCells,
	setCells
} = integrationsSlice.actions;
