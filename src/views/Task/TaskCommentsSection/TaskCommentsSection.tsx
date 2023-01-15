import React, {FC} from "react";
import Comment from "@customTypes/entities/comment";
import CommentItem from "@components/CommentItem/CommentItem";
import Divider from "@components/Divider/Divider";
import createPages from "@utils/helpers/createPages";
import Button from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import declOfNum from "@utils/helpers/declOfNum";
import {getIsCommentVoting} from "@store/comments/comments.selectors";
import styles from "./TaskCommentsSection.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import CommentsService from "../../../services/comments/comments.service";
import useAppSelector from "../../../hooks/useAppSelector";

interface TaskCommentsSectionProps {
	totalCount: number;
	comments: Comment[];
	totalPages: number;
	page: number;
	onLoadMore: (p: number) => void;
}

const TaskCommentsSection: FC<TaskCommentsSectionProps> = ({
	totalCount,
	comments,
	totalPages,
	page,
	onLoadMore
}) => {
	const dispatch = useAppDispatch();
	const pages = createPages(totalPages, page);
	const isVoting = useAppSelector(getIsCommentVoting);

	const handleUpvote = (id: string) => dispatch(CommentsService.upvote(id));

	return (
		<>
			<Typography variant="h4" component="h4">
				{totalCount}{" "}
				{declOfNum(totalCount, ["віповідь", "відповіді", "відповідей"])}
			</Typography>
			<div className={styles.comments}>
				{comments.map((comment, index) => (
					<React.Fragment key={comment.uuid}>
						<CommentItem
							voteStatus={comment.my_vote.vote}
							isVoting={isVoting}
							onUpvote={() => handleUpvote(comment.uuid)}
							className={styles.comment}
							key={comment.uuid}
							creator={comment.owner.profile}
							text={comment.text}
							score={comment.score}
						/>
						{index !== comments.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</div>
			{totalPages > 1 && (
				<div className={styles.pages}>
					{pages.map(p => (
						<Button
							isActive={page === p}
							key={p}
							className={styles.button}
							onClick={() => onLoadMore(p)}
							text={p}
							variant="outline"
						/>
					))}
				</div>
			)}
		</>
	);
};

export default TaskCommentsSection;
