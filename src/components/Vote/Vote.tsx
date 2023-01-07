import {VoteStatus} from "@customTypes/APIs/global";
import classNames from "classnames";
import React, {FC, MouseEventHandler} from "react";
import {IoCaretUp} from "react-icons/io5";
import styles from "./Vote.module.scss";

interface VoteProps {
	onUpvote: MouseEventHandler;
	status: VoteStatus;
	isDisabled?: boolean;
	score: number;
	className?: string;
}

const Vote: FC<VoteProps> = ({
	onUpvote,
	status,
	isDisabled,
	score,
	className
}) => (
	<button
		className={classNames(className, styles.button, {
			[styles.active]: status === "up"
		})}
		disabled={isDisabled}
		onClick={onUpvote}
		type="button"
	>
		<IoCaretUp className={styles.icon} size={32} />
		<p>{score}</p>
	</button>
);

export default Vote;
