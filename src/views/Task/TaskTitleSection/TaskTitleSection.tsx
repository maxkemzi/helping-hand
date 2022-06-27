import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import TagItem from "@components/TagItem/TagItem";
import {ITag} from "@customTypes/index";
import styles from "./TaskTItleSection.module.scss";

interface TaskTitleSectionProps {
	title: string;
	tags: ITag[];
}

const TaskTitleSection: FC<TaskTitleSectionProps> = ({title, tags}) => (
	<>
		<Typography className={styles.title} variant="h3" component="h3">
			{title}
		</Typography>
		<div className={styles.tags}>
			{tags.map(tag => (
				<div key={tag.id} className={styles.tag}>
					<TagItem text={tag.text} />
				</div>
			))}
		</div>
	</>
);

export default TaskTitleSection;
