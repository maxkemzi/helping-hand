import {PayloadAction} from "@reduxjs/toolkit";
import {Tags} from "@customTypes/APIs/tags";

export interface TagsSliceState {
	tags: Tags;
	isFetching: boolean;
}

export type SetIsFetching = PayloadAction<boolean>;

export type SetTags = PayloadAction<Tags>;
