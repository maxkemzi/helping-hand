import {createSlice} from "@reduxjs/toolkit";
import {SetIsFetching} from "@store/task/task.types";
import {SetTags, TagsSliceState} from "@store/tags/tags.types";

const initialState: TagsSliceState = {
	tags: {courses: [], general_categories: [], subjects: []},
	isFetching: false
};

const tagsSlice = createSlice({
	name: "tags",
	initialState,
	reducers: {
		setTags(state, action: SetTags) {
			state.tags = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		}
	}
});

export default tagsSlice.reducer;
export const {setTags, setIsFetching} = tagsSlice.actions;
