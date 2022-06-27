import React from "react";
import Textarea from "@components/Textarea/Textarea";
import Button from "@components/Button/Button";
import styles from "./TaskAnswerFormSection.module.scss";

const TaskAnswerFormSection = () => (
	<>
		<p className={styles["small-title"]}>Ваша відповідь</p>
		<Textarea rows={6} className={styles.textarea} />
		<Button className={styles.btn} text="Відіслати" />
	</>
);

export default TaskAnswerFormSection;
