import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import {
	AUTH_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE,
	SETTINGS_ROUTE,
	SIGNUP_ROUTE,
	STATISTICS_ROUTE,
	TASKS_ROUTE,
	TASK_ROUTE
} from "@utils/constants/routes";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";
import HomePage from "@views/Home/HomePage/HomePage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import ProfileStats from "@views/Profile/ProfileStats/ProfileStats";
import ProfileTasks from "@views/Profile/ProfileTasks/ProfileTasks";
import AccountSettings from "@views/Settings/AccountSettings/AccountSettings";
import IntegrationSettings from "@views/Settings/IntegrationSettings/IntegrationSettings";
import InterfaceSettings from "@views/Settings/InterfaceSettings/InterfaceSettings";
import SettingsPage from "@views/Settings/SettingsPage/SettingsPage";
import StatisticsPage from "@views/Statistics/StatisticsPage/StatisticsPage";
import TaskPage from "@views/Task/TaskPage/TaskPage";
import TasksPage from "@views/Tasks/TasksPage/TasksPage";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => (
	<Routes>
		<Route path={HOME_ROUTE} element={<HomePage />} />

		<Route path={AUTH_ROUTE} element={<AuthPage />}>
			<Route index element={<Navigate to={LOGIN_ROUTE} replace />} />
			<Route path={LOGIN_ROUTE} element={<AuthLoginForm />} />
			<Route path={SIGNUP_ROUTE} element={<AuthSignupForm />} />
			<Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
		</Route>

		<Route
			path={TASKS_ROUTE}
			element={
				<PrivateRoute>
					<TasksPage />
				</PrivateRoute>
			}
		/>

		<Route
			path={STATISTICS_ROUTE}
			element={
				<PrivateRoute>
					<StatisticsPage />
				</PrivateRoute>
			}
		/>

		<Route
			path={PROFILE_ROUTE}
			element={
				<PrivateRoute>
					<ProfilePage />
				</PrivateRoute>
			}
		>
			<Route index element={<Navigate to={PROFILE_TASKS_ROUTE} replace />} />
			<Route path={`${PROFILE_ROUTE}/:id/tasks`} element={<ProfileTasks />} />
			<Route path={`${PROFILE_ROUTE}/:id/stats`} element={<ProfileStats />} />
			<Route path={PROFILE_TASKS_ROUTE} element={<ProfileTasks />} />
			<Route path={PROFILE_STATS_ROUTE} element={<ProfileStats />} />
			<Route path="*" element={<Navigate to={PROFILE_TASKS_ROUTE} />} />
		</Route>

		<Route path={SETTINGS_ROUTE} element={<SettingsPage />}>
			<Route index element={<Navigate to={SETTINGS_ACCOUNT_ROUTE} replace />} />
			<Route
				path={SETTINGS_ACCOUNT_ROUTE}
				element={
					<PrivateRoute>
						<AccountSettings />
					</PrivateRoute>
				}
			/>
			<Route
				path={SETTINGS_INTEGRATION_ROUTE}
				element={
					<PrivateRoute>
						<IntegrationSettings />
					</PrivateRoute>
				}
			/>
			<Route path={SETTINGS_INTERFACE_ROUTE} element={<InterfaceSettings />} />
			<Route path="*" element={<Navigate to={SETTINGS_ACCOUNT_ROUTE} />} />
		</Route>

		<Route
			path={TASK_ROUTE}
			element={
				<PrivateRoute>
					<TaskPage />
				</PrivateRoute>
			}
		/>

		<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
	</Routes>
);

export default AppRouter;
