import {configureStore} from "@reduxjs/toolkit";
import tagsReducer from "./tags/tags.slice";
import profileReducer from "./profile/profile.slice";
import taskReducer from "./task/task.slice";
import appReducer from "./app/app.slice";
import authReducer from "./auth/auth.slice";
import tasksReducer from "./tasks/tasks.slice";
import usersReducer from "./users/users.slice";
import commentsReducer from "./comments/comments.slice";
import integrationsReducer from "./integrations/integrations.slice";

const store = configureStore({
	reducer: {
		appState: appReducer,
		authState: authReducer,
		usersState: usersReducer,
		tasksState: tasksReducer,
		profileState: profileReducer,
		taskState: taskReducer,
		commentsState: commentsReducer,
		integrationsState: integrationsReducer,
		tagsState: tagsReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
