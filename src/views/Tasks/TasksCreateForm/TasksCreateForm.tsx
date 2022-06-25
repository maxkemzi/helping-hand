import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormElement from "@components/FormElement/FormElement";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Textarea from "@components/Textarea/Textarea";
import {ITag} from "@customTypes/index";
import TasksTagsField from "@views/Tasks/TasksTagsField/TasksTagsField";
import styles from "./TasksCreateForm.module.scss";
import mockData from "../../../mock.json";

interface TasksCreateFormValues {
	title: string;
	description: string;
	tags: ITag[];
}

const TasksCreateForm = () => {
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
			{({values, setFieldValue}) => (
				<Form>
					<div className={styles.fields}>
						<TasksTagsField
							className={styles.field}
							tags={values.tags}
							setFieldValue={setFieldValue}
						/>
						<Field
							label="Заголовок"
							className={styles.field}
							name="title"
							component={FormElement}
							element={Input}
						/>

						<Field
							label="Опис"
							className={styles.field}
							name="description"
							component={FormElement}
							element={Textarea}
						/>
					</div>
					<Button size="big" className={styles.btn} text="Створити" isSubmit />
				</Form>
			)}
		</Formik>
	);
};

export default TasksCreateForm;
