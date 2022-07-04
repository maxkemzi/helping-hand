import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
	AUTH_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ACHIEVES_ROUTE,
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
import Header from "@views/Header/Header";
import HomePage from "@views/Home/HomePage/HomePage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";
import TasksPage from "@views/Tasks/TasksPage/TasksPage";
import Footer from "@views/Footer/Footer";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import ProfileTasks from "@views/Profile/ProfileTasks/ProfileTasks";
import ProfileAchieves from "@views/Profile/ProfileAchieves/ProfileAchieves";
import ProfileStats from "@views/Profile/ProfileStats/ProfileStats";
import SettingsPage from "@views/Settings/SettingsPage/SettingsPage";
import AccountSettings from "@views/Settings/AccountSettings/AccountSettings";
import IntegrationSettings from "@views/Settings/IntegrationSettings/IntegrationSettings";
import InterfaceSettings from "@views/Settings/InterfaceSettings/InterfaceSettings";
import TaskPage from "@views/Task/TaskPage/TaskPage";

const AppRouter = () => (
	<Routes>
		<Route
			path={HOME_ROUTE}
			element={
				<>
					<Header hasBorder position="absolute" />
					<main className="main">
						<HomePage />
					</main>
				</>
			}
		/>

		<Route
			path={AUTH_ROUTE}
			element={
				<>
					<Header />
					<main className="main">
						<AuthPage />
					</main>
					<Footer />
				</>
			}
		>
			<Route index element={<Navigate to={LOGIN_ROUTE} replace />} />
			<Route path={LOGIN_ROUTE} element={<AuthLoginForm />} />
			<Route path={SIGNUP_ROUTE} element={<AuthSignupForm />} />
			<Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
		</Route>

		<Route
			path={TASKS_ROUTE}
			element={
				<>
					<Header hasBorder />
					<main className="main">
						<TasksPage />
					</main>
					<Footer />
				</>
			}
		/>

		<Route
			path={PROFILE_ROUTE}
			element={
				<PrivateRoute>
					<Header hasBorder />
					<main className="main">
						<ProfilePage />
					</main>
					<Footer />
				</PrivateRoute>
			}
		>
			<Route index element={<Navigate to={PROFILE_TASKS_ROUTE} replace />} />
			<Route path={PROFILE_TASKS_ROUTE} element={<ProfileTasks />} />
			<Route path={PROFILE_ACHIEVES_ROUTE} element={<ProfileAchieves />} />
			<Route path={PROFILE_STATS_ROUTE} element={<ProfileStats />} />
			<Route path="*" element={<Navigate to={PROFILE_TASKS_ROUTE} />} />
		</Route>

		<Route
			path={SETTINGS_ROUTE}
			element={
				<>
					<Header hasBorder />
					<main className="main">
						<SettingsPage />
					</main>
					<Footer />
				</>
			}
		>
			<Route index element={<Navigate to={SETTINGS_ACCOUNT_ROUTE} replace />} />
			<Route path={SETTINGS_ACCOUNT_ROUTE} element={<AccountSettings />} />
			<Route
				path={SETTINGS_INTEGRATION_ROUTE}
				element={<IntegrationSettings />}
			/>
			<Route path={SETTINGS_INTERFACE_ROUTE} element={<InterfaceSettings />} />
			<Route path="*" element={<Navigate to={SETTINGS_ACCOUNT_ROUTE} />} />
		</Route>

		<Route
			path={TASK_ROUTE}
			element={
				<PrivateRoute>
					<Header hasBorder />
					<main className="main">
						<TaskPage />
					</main>
					<Footer />
				</PrivateRoute>
			}
		/>

		<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
	</Routes>
);

export default AppRouter;
