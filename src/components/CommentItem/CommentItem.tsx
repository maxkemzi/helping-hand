import React, {FC, MouseEventHandler} from "react";
import UserInfo from "@components/UserInfo/UserInfo";
import User from "@customTypes/entities/user";
import classNames from "classnames";
import {IoCaretDown, IoCaretUp} from "react-icons/io5";
import {CommentVote} from "@customTypes/entities/comment";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
	creator: User;
	text: string;
	className?: string;
	score: number;
	onUpvote: MouseEventHandler;
	onDownvote: MouseEventHandler;
	isVoting: boolean;
	voteStatus: CommentVote;
}

const CommentItem: FC<CommentItemProps> = ({
	creator,
	text,
	className,
	score,
	onUpvote,
	onDownvote,
	isVoting,
	voteStatus
}) => (
	<div className={classNames(className, styles.item)}>
		<div className={styles.vote}>
			<button
				className={classNames(styles.button, {
					[styles.active]: voteStatus === "up"
				})}
				disabled={isVoting}
				onClick={onUpvote}
				type="button"
			>
				<IoCaretUp className={styles.icon} size={32} />
			</button>
			<p>{score}</p>
			<button
				className={classNames(styles.button, {
					[styles.active]: voteStatus === "down"
				})}
				disabled={isVoting}
				onClick={onDownvote}
				type="button"
			>
				<IoCaretDown className={styles.icon} size={32} />
			</button>
		</div>
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
