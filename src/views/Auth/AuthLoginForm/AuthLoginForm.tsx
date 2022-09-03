import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import * as yup from "yup";
import Button from "@components/Button/Button";
import {useTranslation} from "react-i18next";
import styles from "./AuthLoginForm.module.scss";

const AuthLoginForm: FC<{className?: string}> = ({className}) => {
	const {t} = useTranslation();
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
						label={t("form.fields.email")}
						className={styles.field}
						name="email"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label={t("form.fields.password")}
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
					text={t("auth.form.loginSubmitButton")}
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default AuthLoginForm;
