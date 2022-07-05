import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Textarea from "@components/Textarea/Textarea";
import styles from "./HeaderContactForm.module.scss";

const HeaderContactForm = () => {
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
						label="Email"
						className={styles.field}
						name="email"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Текст"
						className={styles.field}
						name="text"
						component={FormTextField}
						element={Textarea}
					/>
				</div>
				<Button size="big" className={styles.btn} text="Send" isSubmit />
			</Form>
		</Formik>
	);
};

export default HeaderContactForm;
