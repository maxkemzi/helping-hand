import Button from "@components/Button/Button";
import CommentItem from "@components/CommentItem/CommentItem";
import Divider from "@components/Divider/Divider";
import Typography from "@components/Typography/Typography";
import Comment from "@customTypes/entities/comment";
import {getAuthUser} from "@store/auth/auth.selectors";
import {getIsCommentVoting} from "@store/comments/comments.selectors";
import createPages from "@utils/helpers/createPages";
import declOfNum from "@utils/helpers/declOfNum";
import React, {FC} from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import CommentsService from "../../../services/comments/comments.service";
import styles from "./TaskCommentsSection.module.scss";

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
	const user = useAppSelector(getAuthUser);

	const handleUpvote = (id: string) => dispatch(CommentsService.upvote(id));

	return (
		<>
			<Typography variant="h4" component="h4">
				{totalCount}{" "}
				{declOfNum(totalCount, ["віповідь", "відповіді", "відповідей"])}
			</Typography>
			<div className={styles.comments}>
				{comments.map((comment, index) => (
					<React.Fragment key={comment.id}>
						<CommentItem
							className={styles.comment}
							voteStatus={comment.upvotes.includes(user.id) ? "up" : "down"}
							isVoting={isVoting}
							onUpvote={() => handleUpvote(comment.id)}
							key={comment.id}
							creator={comment.user}
							text={comment.text}
							score={comment.upvotes.length}
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
