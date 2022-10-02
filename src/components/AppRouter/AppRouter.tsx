import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
	AUTH_ROUTE,
	HOME_ROUTE,
	INTEGRATION_AUTH_ROUTE,
	INTEGRATION_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE,
	SETTINGS_ROUTE,
	SIGNUP_ROUTE,
	TASK_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import HomePage from "@views/Home/HomePage/HomePage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";
import TasksPage from "@views/Tasks/TasksPage/TasksPage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import ProfileTasks from "@views/Profile/ProfileTasks/ProfileTasks";
import ProfileStats from "@views/Profile/ProfileStats/ProfileStats";
import SettingsPage from "@views/Settings/SettingsPage/SettingsPage";
import AccountSettings from "@views/Settings/AccountSettings/AccountSettings";
import IntegrationSettings from "@views/Settings/IntegrationSettings/IntegrationSettings";
import InterfaceSettings from "@views/Settings/InterfaceSettings/InterfaceSettings";
import TaskPage from "@views/Task/TaskPage/TaskPage";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import IntegrationPage from "@views/Integration/IntegrationPage/IntegrationPage";
import IntegrationAuth from "@views/Integration/IntegrationAuth/IntegrationAuth";
import TritonIntegration from "@views/Integration/TritonIntegration/TritonIntegration";

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
			path={INTEGRATION_ROUTE}
			element={
				<PrivateRoute>
					<IntegrationPage />
				</PrivateRoute>
			}
		>
			<Route index element={<TritonIntegration />} />
			<Route path={INTEGRATION_AUTH_ROUTE} element={<IntegrationAuth />} />
			<Route path="*" element={<Navigate to={INTEGRATION_AUTH_ROUTE} />} />
		</Route>

		<Route
			path={PROFILE_ROUTE}
			element={
				<PrivateRoute>
					<ProfilePage />
				</PrivateRoute>
			}
		>
			<Route index element={<Navigate to={PROFILE_TASKS_ROUTE} replace />} />
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
