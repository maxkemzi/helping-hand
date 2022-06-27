import React, {FC} from "react";
import {ITag, ITask} from "@customTypes/index";
import Button from "@components/Button/Button";
import TagItem from "@components/TagItem/TagItem";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE, TASKS_ROUTE} from "@utils/constants/routes";
import Typography from "@components/Typography/Typography";
import UserInfo from "@components/UserInfo/UserInfo";
import StatusIcon from "../../icons/StatusIcon/StatusIcon";
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
	<div className={styles.item}>
		<div className={styles.header}>
			<Typography variant="h4" component="h4">
				{title}
			</Typography>
			<StatusIcon variant={isActive ? "active" : "inactive"} />
		</div>
		<UserInfo
			path={PROFILE_ROUTE}
			className={styles.user}
			avatarPath={creator.avatar}
			username={creator.username}
		/>
		<Typography className={styles.description} variant="body1" component="p">
			{description}
		</Typography>
		<div className={styles.tags}>
			{tags.map((tag: ITag) => (
				<TagItem key={tag.id} {...tag} />
			))}
		</div>
		<div className={styles.footer}>
			<NavLink to={`${TASKS_ROUTE}/${id}`}>
				<Button
					className={styles.btn}
					size="small"
					variant="outline"
					text="Докладніше"
				/>
			</NavLink>
			<Typography className={styles.date} variant="body1" component="p">
				{date}
			</Typography>
		</div>
		<NavLink className={styles.more} to={`${TASKS_ROUTE}/${id}`} />
	</div>
);

export default TaskItem;
