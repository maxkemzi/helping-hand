import React, {FC, useEffect} from "react";
import TaskTitleSection from "@views/Task/TaskTitleSection/TaskTitleSection";
import TaskStatsSection from "@views/Task/TaskStatsSection/TaskStatsSection";
import TaskQuestionSection from "@views/Task/TaskQuestionSection/TaskQuestionSection";
import TaskCommentsSection from "@views/Task/TaskCommentsSection/TaskCommentsSection";
import TaskCommentFormSection from "@views/Task/TaskCommentFormSection/TaskCommentFormSection";
import {useParams} from "react-router-dom";
import MainLayout from "@components/MainLayout/MainLayout";
import Divider from "@components/Divider/Divider";
import {getIsTaskFetching, getTask} from "@store/task/task.selectors";
import {
	getComments,
	getCommentsLimit,
	getCommentsPage,
	getCommentsTotalCount,
	getCommentsTotalPages,
	getIsCommentsFetching
} from "@store/comments/comments.selectors";
import getParsedDate from "@utils/helpers/getParsedDate";
import mockData from "../../../mock.json";
import styles from "./TaskPage.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";
import useAppSelector from "../../../hooks/useAppSelector";
import CommentsService from "../../../services/comments/comments.service";

const TaskPage: FC = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const task = useAppSelector(getTask);
	const comments = useAppSelector(getComments);
	const isTaskFetching = useAppSelector(getIsTaskFetching);
	const isCommentsFetching = useAppSelector(getIsCommentsFetching);
	const limit = useAppSelector(getCommentsLimit);
	const page = useAppSelector(getCommentsPage);
	const totalPages = useAppSelector(getCommentsTotalPages);
	const totalCount = useAppSelector(getCommentsTotalCount);

	useEffect(() => {
		Promise.all([
			dispatch(TasksService.fetchOne(id)),
			dispatch(CommentsService.fetchAll(id, {limit, page: 1}))
		]);
	}, [dispatch, id, limit]);

	const handleLoadMore = (p: number) =>
		dispatch(CommentsService.fetchAll(id, {limit, page: p}));

	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					{isTaskFetching ? (
						"Loading..."
					) : (
						<div className="wrapper">
							<TaskTitleSection title={task.title} tags={mockData.tags} />
							<Divider className={styles.divider} />
							<TaskStatsSection
								createdDate={getParsedDate(task.created_at)}
								updatedDate={getParsedDate(task.updated_at)}
							/>
							<Divider className={styles.divider} />
							<TaskQuestionSection
								creator={task.owner.profile}
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
							<TaskCommentFormSection id={task.uuid} />
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

export default TaskPage;
