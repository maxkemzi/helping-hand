import {PayloadAction} from "@reduxjs/toolkit";
import User from "@customTypes/entities/user";

export interface AuthSliceState {
	user: User;
	isAuth: boolean;
	isFetching: boolean;
	isSubmitting: boolean;
}

export type SetIsAuth = PayloadAction<boolean>;

export type SetUser = PayloadAction<User>;

export type SetIsFetching = PayloadAction<boolean>;

export type SetIsSubmitting = PayloadAction<boolean>;
