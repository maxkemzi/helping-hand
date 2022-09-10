import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import TagItem from "@components/TagItem/TagItem";
import Tag from "@customTypes/entities/tag";
import styles from "./TaskTItleSection.module.scss";

interface TaskTitleSectionProps {
	title: string;
	tags: Tag[];
}

const TaskTitleSection: FC<TaskTitleSectionProps> = ({title, tags}) => (
	<>
		<Typography className={styles.title} variant="h3" component="h3">
			{title}
		</Typography>
		<div className={styles.tags}>
			{tags.map(tag => (
				<TagItem key={tag.id} text={tag.text} />
			))}
		</div>
	</>
);

export default TaskTitleSection;
