import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Textarea from "@components/Textarea/Textarea";
import {useTranslation} from "react-i18next";
import styles from "./HeaderContactForm.module.scss";

const HeaderContactForm = () => {
	const {t} = useTranslation();
	const validationSchema = yup.object().shape({
		email: yup.string(),
		text: yup.string()
	});

	return (
		<Formik
			initialValues={{email: "", text: ""}}
			onSubmit={() => console.log("Submit")}
			validationSchema={validationSchema}
			validateOnBlur
		>
			<Form>
				<div className={styles.fields}>
					<Field
						label={t("form.fields.email")}
						className={styles.field}
						name="email"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label={t("form.fields.message")}
						className={styles.field}
						name="text"
						component={FormTextField}
						element={Textarea}
					/>
				</div>
				<Button
					size="big"
					className={styles.btn}
					text={t("contactModal.sendButtonText")}
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default HeaderContactForm;
