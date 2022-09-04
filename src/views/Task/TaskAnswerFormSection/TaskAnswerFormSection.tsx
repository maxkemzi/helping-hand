import React from "react";
import Textarea from "@components/Textarea/Textarea";
import Button from "@components/Button/Button";
import {useTranslation} from "react-i18next";
import styles from "./TaskAnswerFormSection.module.scss";

const TaskAnswerFormSection = () => {
	const {t} = useTranslation();
	return (
		<>
			<p className={styles["small-title"]}>{t("task.yourAnswer")}</p>
			<Textarea rows={6} className={styles.textarea} />
			<Button className={styles.btn} text={t("task.sendButton")} />
		</>
	);
};

export default TaskAnswerFormSection;
