import {createSlice} from "@reduxjs/toolkit";
import {
	SetIsFetching,
	SetIsVoting,
	SetTask,
	TaskSliceState,
	UpdateTask
} from "@store/task/task.types";

const initialState: TaskSliceState = {
	task: {
		title: "",
		status: "closed",
		owner: {profile: {username: "", photo: "", description: "", uuid: ""}},
		created_at: "Sat, 17 Sep 2022 12:03:43 GMT",
		text: "",
		positive_score: 0,
		tags: [],
		category: "",
		negative_score: 0,
		score: 0,
		uuid: "",
		updated_at: "Sat, 17 Sep 2022 12:03:43 GMT",
		my_vote: {
			post: "",
			user: "",
			vote: null
		}
	},
	isFetching: false,
	isVoting: false
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		setTask(state, action: SetTask) {
			state.task = action.payload;
		},
		updateTask(state, action: UpdateTask) {
			state.task = {...state.task, ...action.payload};
		},
		setIsFetching(state, action: SetIsFetching) {
			state.isFetching = action.payload;
		},
		setIsVoting(state, action: SetIsVoting) {
			state.isVoting = action.payload;
		}
	}
});

export default taskSlice.reducer;
export const {setTask, setIsFetching, setIsVoting, updateTask} =
	taskSlice.actions;
