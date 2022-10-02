import {PayloadAction} from "@reduxjs/toolkit";

export interface IntegrationsSliceState {
	isConnected: boolean;
	isFetching: boolean;
	headCells: string[];
	cells: string[][];
	profileHeadCells: string[];
	profileCells: string[][];
}

export type SetIsConnected = PayloadAction<boolean>;

export type SetIsFetching = PayloadAction<boolean>;
