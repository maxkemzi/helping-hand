import TagItem from "@components/TagItem/TagItem";
import Typography from "@components/Typography/Typography";
import Vote from "@components/Vote/Vote";
import Tag from "@customTypes/entities/tag";
import React, {FC, MouseEventHandler} from "react";
import styles from "./TaskTItleSection.module.scss";

interface TaskTitleSectionProps {
	title: string;
	tags: Tag[];
	isVoting: boolean;
	onUpvote: MouseEventHandler;
	upvoteCount: number;
	isUpvoted: boolean;
}

const TaskTitleSection: FC<TaskTitleSectionProps> = ({
	title,
	tags,
	isVoting,
	onUpvote,
	upvoteCount,
	isUpvoted
}) => (
	<>
		<div className={styles["title-wrapper"]}>
			<Typography className={styles.title} variant="h3" component="h3">
				{title}
			</Typography>
			<div className={styles["title-right"]}>
				<Vote
					className={styles.vote}
					status={isUpvoted ? "up" : "down"}
					score={upvoteCount}
					onUpvote={onUpvote}
					isDisabled={isVoting}
				/>
			</div>
		</div>
		{tags.length !== 0 && (
			<div className={styles.tags}>
				{tags.map(tag => (
					<TagItem key={tag} text={tag} />
				))}
			</div>
		)}
	</>
);

export default TaskTitleSection;
