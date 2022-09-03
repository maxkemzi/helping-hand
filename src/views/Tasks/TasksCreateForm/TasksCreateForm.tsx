import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Textarea from "@components/Textarea/Textarea";
import FormTagsField from "@components/FormTagsField/FormTagsField";
import Tag from "@customTypes/entities/tag";
import {useTranslation} from "react-i18next";
import styles from "./TasksCreateForm.module.scss";
import mockData from "../../../mock.json";

interface TasksCreateFormValues {
	title: string;
	description: string;
	tags: Tag[];
}

const TasksCreateForm = () => {
	const {t} = useTranslation("translation", {keyPrefix: "tasks.createModal"});
	const initialValues: TasksCreateFormValues = {
		title: "",
		description: "",
		tags: [mockData.tags[0]]
	};

	const validationSchema = yup.object().shape({
		title: yup.string(),
		description: yup.string(),
		tags: yup.array().of(yup.object())
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={() => console.log("Submit")}
			validateOnBlur
		>
			<Form>
				<div className={styles.fields}>
					<Field
						className={styles.field}
						name="tags"
						component={FormTagsField}
						tagOptions={mockData.tags}
					/>

					<Field
						label={t("fields.title")}
						className={styles.field}
						name="title"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label={t("fields.description")}
						className={styles.field}
						name="description"
						component={FormTextField}
						element={Textarea}
						rows={4}
					/>
				</div>
				<Button
					size="big"
					className={styles.btn}
					text={t("submitButton")}
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default TasksCreateForm;
