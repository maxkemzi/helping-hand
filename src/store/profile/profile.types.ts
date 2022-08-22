import {PayloadAction} from "@reduxjs/toolkit";
import User from "@customTypes/entities/user";

export interface ProfileSliceState {
	profile: User;
	isFetching: boolean;
}

export type SetProfile = PayloadAction<User>;

export type SetIsFetching = PayloadAction<boolean>;
