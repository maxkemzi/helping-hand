import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask} from "@models/models";

interface ProfileSliceState {
	task: ITask;
	isFetching: boolean;
}

const initialState: ProfileSliceState = {
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
		setTask(state, action: PayloadAction<ITask>) {
			state.task = action.payload;
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		}
	}
});

export default taskSlice.reducer;
export const {setTask, setIsFetching} = taskSlice.actions;
