import UserInfo from "@components/UserInfo/UserInfo";
import Vote from "@components/Vote/Vote";
import {VoteStatus} from "@customTypes/APIs/global";
import User from "@customTypes/entities/user";
import classNames from "classnames";
import React, {FC, MouseEventHandler} from "react";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
	creator: User;
	text: string;
	className?: string;
	score: number;
	onUpvote: MouseEventHandler;
	isVoting: boolean;
	voteStatus: VoteStatus;
}

const CommentItem: FC<CommentItemProps> = ({
	creator,
	text,
	className,
	score,
	onUpvote,
	isVoting,
	voteStatus
}) => (
	<div className={classNames(className, styles.item)}>
		<Vote
			className={styles.vote}
			onUpvote={onUpvote}
			score={score}
			status={voteStatus}
			isDisabled={isVoting}
		/>
		<div>
			<UserInfo
				className={styles.user}
				avatarPath={creator.photo}
				fallbackVariant="light"
				username={creator.username}
			/>
			<p>{text}</p>
		</div>
	</div>
);

export default CommentItem;
