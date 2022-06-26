export const HOME_ROUTE: string = "/";
export const AUTH_ROUTE: string = "/auth";
export const SIGNUP_ROUTE: string = "/signup";
export const TASKS_ROUTE: string = "/tasks";
export const PROFILE_ROUTE: string = "/profile";
export const SETTINGS_ROUTE: string = "/settings";
export const TASK_ROUTE: string = "/tasks/:id";

export const ROUTES_WITH_ABSOLUTE_HEADER = [HOME_ROUTE];
export const ROUTES_WITH_BORDER_HEADER = [
	TASK_ROUTE,
	TASKS_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE
];
export const ROUTES_WITHOUT_FOOTER = [AUTH_ROUTE, HOME_ROUTE];
