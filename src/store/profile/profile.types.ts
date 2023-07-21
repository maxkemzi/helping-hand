import {PayloadAction} from "@reduxjs/toolkit";
import User from "@customTypes/entities/user";

export interface ProfileStatistics {
	taskCount: number;
	commentCount: number;
}

export interface ProfileSliceState {
	profile: User;
	isFetching: boolean;
	isStatisticsFetching: boolean;
	statistics: ProfileStatistics;
}

export type SetStatistics = PayloadAction<ProfileStatistics>;

export type SetProfile = PayloadAction<User>;

export type SetIsFetching = PayloadAction<boolean>;
