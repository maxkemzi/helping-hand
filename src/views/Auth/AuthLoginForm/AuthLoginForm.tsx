import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import {LoginArgs} from "@customTypes/services/auth";
import {getIsAuthSubmitting} from "@store/auth/auth.selectors";
import {TASKS_ROUTE} from "@utils/constants/routes";
import {useNavigate} from "react-router-dom";
import FormPasswordField from "@components/FormPasswordField/FormPasswordField";
import styles from "./AuthLoginForm.module.scss";
import AuthService from "../../../services/auth/auth.service";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import {loginFormValidation} from "../../../vaildation";

const AuthLoginForm: FC<{className?: string}> = ({className}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isFetching = useAppSelector(getIsAuthSubmitting);

	const handleSubmit = async (
		values: LoginArgs,
		{setStatus}: FormikHelpers<LoginArgs>
	) => {
		await dispatch(
			AuthService.login(
				values,
				() => navigate(TASKS_ROUTE),
				e => {
					setStatus(e.response.data.error.message);
				}
			)
		);
	};

	return (
		<Formik
			initialValues={{username: "", password: ""}}
			onSubmit={handleSubmit}
			validationSchema={loginFormValidation}
			validateOnBlur
		>
			{({status, isValid}) => (
				<Form className={className} noValidate>
					{status && <p className={styles.status}>{status}</p>}
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
							className={styles.field}
							name="password"
							component={FormPasswordField}
							element={Input}
						/>
					</div>
					<Button
						size="big"
						className={styles.btn}
						text="Увійти"
						disabled={isFetching || !isValid}
						isSubmit
					/>
				</Form>
			)}
		</Formik>
	);
};

export default AuthLoginForm;
