import React from "react";
import UserInfo from "@components/UserInfo/UserInfo";
import styles from "./TaskAnswersSection.module.scss";

const TaskAnswersSection = () => (
	<>
		<p className={styles["answer-count"]}>1 відповідь</p>
		<UserInfo className={styles.user} avatarPath="" username="Максим" />
		<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
	</>
);

export default TaskAnswersSection;
