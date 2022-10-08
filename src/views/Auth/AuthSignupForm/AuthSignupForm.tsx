import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import {getIsAuthFetching} from "@store/auth/auth.selectors";
import {useNavigate} from "react-router-dom";
import {TASKS_ROUTE} from "@utils/constants/routes";
import {RegisterArgs} from "@customTypes/services/auth";
import styles from "./AuthSignupForm.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import AuthService from "../../../services/auth/auth.service";
import {signupFormValidation} from "../../../vaildation";

const AuthSignupForm: FC<{className?: string}> = ({className}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authIsFetching = useAppSelector(getIsAuthFetching);

	const handleSubmit = async (values: RegisterArgs) => {
		await dispatch(AuthService.register(values));
		navigate(TASKS_ROUTE);
	};

	return (
		<Formik
			initialValues={{
				// email: "",
				username: "",
				password: ""
			}}
			onSubmit={handleSubmit}
			validationSchema={signupFormValidation}
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

					{/* <Field */}
					{/*	label="Email" */}
					{/*	className={styles.field} */}
					{/*	name="email" */}
					{/*	component={FormTextField} */}
					{/*	element={Input} */}
					{/* /> */}

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
					disabled={authIsFetching}
					size="big"
					className={styles.btn}
					text="Зареєструватись"
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default AuthSignupForm;
