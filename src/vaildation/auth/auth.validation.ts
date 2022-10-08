import * as yup from "yup";
import {PASSWORD_REGEXP, USERNAME_REGEXP} from "@utils/constants/regexps";

export const loginFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Ім'я обов'язкове")
		.min(6, "Ім'я занадто коротке")
		.max(20, "Ім'я занадто довге")
		.matches(
			USERNAME_REGEXP,
			"Ім'я користувача повинно містити хоча б 1 букву"
		),
	password: yup
		.string()
		.required("Пароль обов'язковий")
		.min(8, "Пароль занадто короткий")
		.max(40, "Пароль занадто довгий")
		.matches(
			PASSWORD_REGEXP,
			"Пароль повинен містити щонайменше 1 велику, малу літери та одну цифру"
		)
});

export const signupFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Ім'я обов'язкове")
		.min(6, "Ім'я занадто коротке")
		.max(20, "Ім'я занадто довге")
		.matches(
			USERNAME_REGEXP,
			"Ім'я користувача повинно містити хоча б 1 букву"
		),
	password: yup
		.string()
		.required("Пароль обов'язковий")
		.min(8, "Пароль занадто короткий")
		.max(40, "Пароль занадто довгий")
		.matches(
			PASSWORD_REGEXP,
			"Пароль повинен містити щонайменше 1 велику, малу літери та одну цифру"
		)
});
