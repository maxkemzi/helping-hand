import {createSlice} from "@reduxjs/toolkit";
import {SetIsFetching, SetTask, TaskSliceState} from "@store/task/task.types";

const initialState: TaskSliceState = {
	task: {
		title: "",
		creator: {username: "", avatar: ""},
		date: "",
		id: "",
		description: "",
		tags: [],
		isActive: false
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
