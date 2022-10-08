import React, {FC} from "react";
import Textarea from "@components/Textarea/Textarea";
import Button from "@components/Button/Button";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {getIsCommentCreating} from "@store/comments/comments.selectors";
import FormTextField from "@components/FormTextField/FormTextField";
import styles from "./TaskCommentFormSection.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import CommentsService from "../../../services/comments/comments.service";
import useAppSelector from "../../../hooks/useAppSelector";

interface TaskCommentFormSectionProps {
	id: string;
}

const TaskCommentFormSection: FC<TaskCommentFormSectionProps> = ({id}) => {
	const dispatch = useAppDispatch();
	const isFetching = useAppSelector(getIsCommentCreating);

	const handleSubmit = (
		values: {text: string},
		{resetForm}: FormikHelpers<{text: string}>
	) => {
		dispatch(CommentsService.createOne(id, values.text));
		resetForm({values: {text: ""}});
	};

	return (
		<>
			<p className={styles["small-title"]}>Ваша відповідь</p>
			<Formik initialValues={{text: ""}} onSubmit={handleSubmit} validateOnBlur>
				<Form>
					<Field
						label="Текст"
						className={styles.textarea}
						name="text"
						component={FormTextField}
						element={Textarea}
						rows={6}
					/>
					<Button
						isSubmit
						className={styles.btn}
						disabled={isFetching}
						text="Відіслати"
					/>
				</Form>
			</Formik>
		</>
	);
};

export default TaskCommentFormSection;
