import {PayloadAction} from "@reduxjs/toolkit";
import {Theme} from "@customTypes/components";

export interface AppSliceState {
	isInitializing: boolean;
	theme: Theme;
}

export type SetIsInitializing = PayloadAction<boolean>;

export type SetTheme = PayloadAction<Theme>;
