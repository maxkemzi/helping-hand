import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Textarea from "@components/Textarea/Textarea";
import FormTagsField from "@components/FormTagsField/FormTagsField";
import Tag from "@customTypes/entities/tag";
import {getIsTaskCreating, getTasksLimit} from "@store/tasks/tasks.selectors";
import styles from "./TasksCreateForm.module.scss";
import mockData from "../../../mock.json";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";
import useAppSelector from "../../../hooks/useAppSelector";

interface TasksCreateFormValues {
	title: string;
	text: string;
	tags: Tag[];
}

const TasksCreateForm = ({onSubmit}: {onSubmit: () => void}) => {
	const dispatch = useAppDispatch();
	const isFetching = useAppSelector(getIsTaskCreating);
	const limit = useAppSelector(getTasksLimit);
	const initialValues: TasksCreateFormValues = {
		title: "",
		text: "",
		tags: [mockData.tags[0]]
	};

	const validationSchema = yup.object().shape({
		title: yup.string(),
		text: yup.string(),
		tags: yup.array().of(yup.object())
	});

	const handleSubmit = (values: TasksCreateFormValues) => {
		dispatch(TasksService.createOne({...values, limit}));
		onSubmit();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
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
						label="Заголовок"
						className={styles.field}
						name="title"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Опис"
						className={styles.field}
						name="text"
						component={FormTextField}
						element={Textarea}
						rows={4}
					/>
				</div>
				<Button
					disabled={isFetching}
					size="big"
					className={styles.btn}
					text="Створити"
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default TasksCreateForm;
