import Divider from "@components/Divider/Divider";
import MainLayout from "@components/MainLayout/MainLayout";
import {getIsAppInitializing} from "@store/app/app.selectors";
import {getAuthUser} from "@store/auth/auth.selectors";
import {
	getComments,
	getCommentsLimit,
	getCommentsPage,
	getCommentsTotalCount,
	getCommentsTotalPages,
	getIsCommentsFetching
} from "@store/comments/comments.selectors";
import {getIsTaskVoting, getTask} from "@store/task/task.selectors";
import getParsedDate from "@utils/helpers/getParsedDate";
import TaskCommentFormSection from "@views/Task/TaskCommentFormSection/TaskCommentFormSection";
import TaskCommentsSection from "@views/Task/TaskCommentsSection/TaskCommentsSection";
import TaskQuestionSection from "@views/Task/TaskQuestionSection/TaskQuestionSection";
import TaskStatsSection from "@views/Task/TaskStatsSection/TaskStatsSection";
import TaskTitleSection from "@views/Task/TaskTitleSection/TaskTitleSection";
import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import AppService from "../../../services/app/app.service";
import CommentsService from "../../../services/comments/comments.service";
import TasksService from "../../../services/tasks/tasks.service";
import styles from "./TaskPage.module.scss";

const TaskPage: FC = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const user = useAppSelector(getAuthUser);
	const task = useAppSelector(getTask);
	const comments = useAppSelector(getComments);
	const isInitializing = useAppSelector(getIsAppInitializing);
	const isCommentsFetching = useAppSelector(getIsCommentsFetching);
	const limit = useAppSelector(getCommentsLimit);
	const page = useAppSelector(getCommentsPage);
	const totalPages = useAppSelector(getCommentsTotalPages);
	const totalCount = useAppSelector(getCommentsTotalCount);
	const isVoting = useAppSelector(getIsTaskVoting);

	useEffect(() => {
		dispatch(AppService.initializeTaskPage(id, limit));
	}, [dispatch, id, limit]);

	const handleLoadMore = (p: number) =>
		dispatch(CommentsService.fetchAll(id, {limit, page: p}));

	const handleUpvote = () => dispatch(TasksService.upvote(id));

	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					{isInitializing ? (
						"Loading..."
					) : (
						<div className="wrapper">
							<TaskTitleSection
								onUpvote={handleUpvote}
								isUpvoted={task.upvotes.includes(user.id)}
								upvoteCount={task.upvotes.length}
								isVoting={isVoting}
								title={task.title}
								tags={task.tags}
							/>
							<Divider className={styles.divider} />
							<TaskStatsSection
								createdDate={getParsedDate(task.createdAt)}
								updatedDate={getParsedDate(task.updatedAt)}
							/>
							<Divider className={styles.divider} />
							<TaskQuestionSection
								creator={task.creator}
								description={task.text}
							/>
							<Divider className={styles.divider} />
							{isCommentsFetching ? (
								"Loading..."
							) : (
								<TaskCommentsSection
									totalCount={totalCount}
									comments={comments}
									totalPages={totalPages}
									page={page}
									onLoadMore={handleLoadMore}
								/>
							)}
							<Divider className={styles.divider} />
							<TaskCommentFormSection id={task.id} />
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

export default TaskPage;
