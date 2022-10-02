import {createSlice} from "@reduxjs/toolkit";
import {SetIsFetching, SetTask, TaskSliceState} from "@store/task/task.types";

const initialState: TaskSliceState = {
	task: {
		title: "",
		status: "closed",
		owner: {profile: {username: "", photo: ""}},
		created_at: "Sat, 17 Sep 2022 12:03:43 GMT",
		text: "",
		positive_score: 0,
		tags: [],
		category: "",
		negative_score: 0,
		score: 0,
		uuid: "",
		updated_at: "Sat, 17 Sep 2022 12:03:43 GMT"
	},
	isFetching: false
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		setTask(state, action: SetTask) {
			state.task = action.payload;
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		}
	}
});

export default taskSlice.reducer;
export const {setTask, setIsFetching} = taskSlice.actions;
