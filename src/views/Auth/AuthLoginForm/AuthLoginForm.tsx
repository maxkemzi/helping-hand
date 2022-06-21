import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import FormElement from "@components/FormElement/FormElement";
import Input from "@components/Input/Input";
import * as yup from "yup";
import Button from "@components/Button/Button";
import styles from "./AuthLoginForm.module.scss";

const AuthLoginForm: FC<{className?: string}> = ({className}) => {
	const validationSchema = yup.object().shape({
		email: yup.string(),
		password: yup.string()
	});

	return (
		<Formik
			initialValues={{email: "", password: ""}}
			onSubmit={() => console.log("Submit")}
			validationSchema={validationSchema}
			validateOnBlur
		>
			<Form className={className}>
				<div className={styles.fields}>
					<Field
						label="Email"
						className={styles.field}
						name="email"
						component={FormElement}
						element={Input}
					/>

					<Field
						label="Пароль"
						type="password"
						className={styles.field}
						name="password"
						component={FormElement}
						element={Input}
					/>
				</div>
				<Button size="big" className={styles.btn} text="Увійти" isSubmit />
			</Form>
		</Formik>
	);
};

export default AuthLoginForm;
