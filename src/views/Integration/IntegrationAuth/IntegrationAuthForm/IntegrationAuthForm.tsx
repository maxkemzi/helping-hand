import React from "react";
import {getIsAuthFetching} from "@store/auth/auth.selectors";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import {CreateIntegrationArgs} from "@customTypes/services/integrations";
import useAppSelector from "../../../../hooks/useAppSelector";
import styles from "./IntegrationAuthForm.module.scss";
import IntegrationsService from "../../../../services/integrations/integrations.service";

const IntegrationAuthForm = () => {
	const authIsFetching = useAppSelector(getIsAuthFetching);
	const validationSchema = yup.object().shape({
		login: yup.string(),
		password: yup.string()
	});

	const handleSubmit = async (values: CreateIntegrationArgs) => {
		await IntegrationsService.create(values);
		window.close();
	};

	return (
		<Formik
			initialValues={{login: "", password: ""}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			validateOnBlur
		>
			<Form>
				<div className={styles.fields}>
					<Field
						label="Ім'я"
						className={styles.field}
						name="login"
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

export default IntegrationAuthForm;
