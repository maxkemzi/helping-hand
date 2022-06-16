import React, {FC} from "react";
import {ITag, ITask} from "@models/models";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import TagItem from "@components/TagItem/TagItem";
import {NavLink} from "react-router-dom";
import {TASKS_ROUTE} from "@utils/constants/routes";
import {ReactComponent as ActiveIcon} from "@images/active.svg";
import {ReactComponent as InactiveIcon} from "@images/inactive.svg";
import styles from "./TaskItem.module.scss";

const TaskItem: FC<ITask> = ({
	title,
	date,
	creator,
	description,
	tags,
	id,
	isActive
}) => (
	<NavLink to={`${TASKS_ROUTE}/${id}`} className={styles.item}>
		<div className={styles.header}>
			<h3 className={styles.title}>{title}</h3>
			{isActive ? <ActiveIcon /> : <InactiveIcon />}
		</div>
		<div className={styles.user}>
			<Avatar className={styles.avatar} imagePath={creator.avatar} />
			<p>{creator.username}</p>
		</div>
		<p className={styles.description}>{description}</p>
		<div className={styles.tags}>
			{tags.map((tag: ITag) => (
				<TagItem key={tag.id} {...tag} />
			))}
		</div>
		<div className={styles.footer}>
			<Button
				size="small"
				className={styles.btn}
				variant="outline"
				text="Докладніше"
			/>
			<p className={styles.date}>{date}</p>
		</div>
	</NavLink>
);

export default TaskItem;
