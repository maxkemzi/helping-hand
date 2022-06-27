import React from "react";
import UserInfo from "@components/UserInfo/UserInfo";
import styles from "./TaskQuestionSection.module.scss";

const TaskQuestionSection = () => (
	<>
		<UserInfo className={styles.user} avatarPath="" username="Катя" />
		<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
	</>
);

export default TaskQuestionSection;
