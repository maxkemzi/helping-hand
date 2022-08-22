import {PayloadAction} from "@reduxjs/toolkit";
import User from "@customTypes/entities/user";

export interface AuthSliceState {
	user: User;
	isAuth: boolean;
	isFetching: boolean;
}

export type SetIsAuth = PayloadAction<boolean>;

export type SetUser = PayloadAction<User>;

export type SetIsFetching = PayloadAction<boolean>;
