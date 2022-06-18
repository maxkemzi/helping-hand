import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	SIGNUP_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import HomePage from "@views/Home/HomePage/HomePage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import TasksPage from "@views/Tasks/TasksPage/TasksPage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import SettingsPage from "@views/Settings/SettingsPage/SettingsPage";

const AppRouter = () => (
	<Routes>
		<Route path={HOME_ROUTE} element={<HomePage />} />
		<Route path={SIGNUP_ROUTE} element={<AuthPage />} />
		<Route path={LOGIN_ROUTE} element={<AuthPage />} />
		<Route path={TASKS_ROUTE} element={<TasksPage />} />
		<Route path={PROFILE_ROUTE} element={<ProfilePage />} />
		<Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
		<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
	</Routes>
);

export default AppRouter;
