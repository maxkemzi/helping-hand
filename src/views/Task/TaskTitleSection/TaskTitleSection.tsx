import TagItem from "@components/TagItem/TagItem";
import Typography from "@components/Typography/Typography";
import Vote from "@components/Vote/Vote";
import {VoteStatus} from "@customTypes/APIs/global";
import Tag from "@customTypes/entities/tag";
import React, {FC, MouseEventHandler} from "react";
import styles from "./TaskTItleSection.module.scss";

interface TaskTitleSectionProps {
	title: string;
	tags: Tag[];
	isVoting: boolean;
	onUpvote: MouseEventHandler;
	score: number;
	voteStatus: VoteStatus;
}

const TaskTitleSection: FC<TaskTitleSectionProps> = ({
	title,
	tags,
	isVoting,
	onUpvote,
	score,
	voteStatus
}) => (
	<>
		<div className={styles["title-wrapper"]}>
			<Typography className={styles.title} variant="h3" component="h3">
				{title}
			</Typography>
			<div className={styles["title-right"]}>
				<Vote
					className={styles.vote}
					status={voteStatus}
					score={score}
					onUpvote={onUpvote}
					isDisabled={isVoting}
				/>
			</div>
		</div>
		{tags.length !== 0 && (
			<div className={styles.tags}>
				{tags.map(tag => (
					<TagItem key={tag.id} text={tag.text} />
				))}
			</div>
		)}
	</>
);

export default TaskTitleSection;
