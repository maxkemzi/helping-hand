import React, {FC} from "react";
import UserInfo from "@components/UserInfo/UserInfo";
import User from "@customTypes/entities/user";
import styles from "./TaskQuestionSection.module.scss";

interface TaskQuestionSectionProps {
	description: string;
	creator: User;
}

const TaskQuestionSection: FC<TaskQuestionSectionProps> = ({
	description,
	creator
}) => (
	<>
		<UserInfo
			fallbackVariant="light"
			className={styles.user}
			avatarPath={creator.photo}
			username={creator.username}
		/>
		<p>{description}</p>
	</>
);

export default TaskQuestionSection;
