import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import {LoginArgs} from "@customTypes/services/auth";
import {getIsAuthFetching} from "@store/auth/auth.selectors";
import {TASKS_ROUTE} from "@utils/constants/routes";
import {useNavigate} from "react-router-dom";
import styles from "./AuthLoginForm.module.scss";
import AuthService from "../../../services/auth/auth.service";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import {loginFormValidation} from "../../../vaildation";

const AuthLoginForm: FC<{className?: string}> = ({className}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authIsFetching = useAppSelector(getIsAuthFetching);

	const handleSubmit = async (values: LoginArgs) => {
		await dispatch(AuthService.login(values));
		navigate(TASKS_ROUTE);
	};

	return (
		<Formik
			initialValues={{username: "", password: ""}}
			onSubmit={handleSubmit}
			validationSchema={loginFormValidation}
			validateOnBlur
		>
			<Form className={className} noValidate>
				<div className={styles.fields}>
					<Field
						label="Ім'я"
						className={styles.field}
						name="username"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Пароль"
						type="password"
						className={styles.field}
						name="password"
						component={FormTextField}
						element={Input}
					/>
				</div>
				<Button
					size="big"
					className={styles.btn}
					text="Увійти"
					disabled={authIsFetching}
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default AuthLoginForm;
