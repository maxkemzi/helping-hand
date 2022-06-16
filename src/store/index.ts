import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile/profile.slice";
import taskReducer from "./task/task.slice";
import appReducer from "./app/app.slice";
import authReducer from "./auth/auth.slice";
import tasksReducer from "./tasks/tasks.slice";
import usersReducer from "./users/users.slice";

const store = configureStore({
	reducer: {
		appState: appReducer,
		authState: authReducer,
		usersState: usersReducer,
		tasksState: tasksReducer,
		profileState: profileReducer,
		taskState: taskReducer
	}
});

export default store;
