import React, {FC} from "react";
import Button from "@components/Button/Button";
import {Form, Formik, FormikHelpers} from "formik";
import {getIsCommentCreating} from "@store/comments/comments.selectors";
import Tiptap from "@components/Tiptap/Tiptap";
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
		<Formik initialValues={{text: ""}} onSubmit={handleSubmit} validateOnBlur>
			{({setFieldValue}) => (
				<Form>
					<Tiptap
						className={styles.editor}
						onBlur={value => setFieldValue("text", value)}
					/>
					<Button
						isSubmit
						className={styles.btn}
						disabled={isFetching}
						text="Відіслати"
					/>
				</Form>
			)}
		</Formik>
	);
};

export default TaskCommentFormSection;
