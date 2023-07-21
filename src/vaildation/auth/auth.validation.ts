import * as yup from "yup";
import {PASSWORD_REGEXP, USERNAME_REGEXP} from "@utils/constants/regexps";

// eslint-disable-next-line import/prefer-default-export
export const signupFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username is required")
		.min(6, "Username is too short")
		.max(20, "Username is too long")
		.matches(USERNAME_REGEXP, "Username must contain at least 1 letter"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password is too short")
		.max(40, "Password is too long")
		.matches(
			PASSWORD_REGEXP,
			"Password must contain at least 1 uppercase, lowercase letter and one digit"
		),
	confirmPassword: yup
		.string()
		.required("Confirm your password")
		.oneOf([yup.ref("password")], "Passwords do not match")
});
