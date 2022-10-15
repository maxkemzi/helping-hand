import React, {useCallback, useEffect, useRef, useState} from "react";
import Button from "@components/Button/Button";
import TasksSortDropdowns from "@views/Tasks/TasksSortDropdowns/TasksSortDropdowns";
import TasksSearchBar from "@views/Tasks/TasksSearchBar/TasksSearchBar";
import TaskItem from "@components/TaskItem/TaskItem";
import TasksFilters from "@views/Tasks/TasksFilters/TasksFilters";
import Modal from "@components/Modal/Modal";
import TasksCreateForm from "@views/Tasks/TasksCreateForm/TasksCreateForm";
import classNames from "classnames";
import MainLayout from "@components/MainLayout/MainLayout";
import Task from "@customTypes/entities/task";
import ScreenSizes from "@utils/constants/screenSizes";
import FilterButton from "@components/FilterButton/FilterButton";
import {
	getHasMoreTasks,
	getIsTasksFetching,
	getTasks,
	getTasksLimit,
	getTasksPage
} from "@store/tasks/tasks.selectors";
import getParsedDate from "@utils/helpers/getParsedDate";
import InfiniteScrollList from "@components/InfiniteScrollList/InfiniteScrollList";
import {setPage} from "@store/tasks/tasks.slice";
import styles from "./TasksPage.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";
import useAppSelector from "../../../hooks/useAppSelector";

const TasksPage = () => {
	const dispatch = useAppDispatch();
	const {width} = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const filterRef = useRef(null);
	const tasks = useAppSelector(getTasks);
	const hasMore = useAppSelector(getHasMoreTasks);
	const isFetching = useAppSelector(getIsTasksFetching);
	const page = useAppSelector(getTasksPage);
	const limit = useAppSelector(getTasksLimit);

	const handleClick = () => setIsOpen(!isOpen);

	useListenClickOutside(filterRef, () => setIsOpen(false));

	useEffect(() => {
		dispatch(TasksService.fetchAll({page, limit}));
	}, [dispatch, limit, page]);

	const handleLoadMore = useCallback(
		() => dispatch(setPage(page + 1)),
		[dispatch, page]
	);

	const handleSubmit = () => setIsVisible(false);

	return (
		<MainLayout>
			<div
				className={classNames("page", {
					[styles["sm-desktop"]]: width <= ScreenSizes.SmDesktopWidth,
					[styles.tablet]: width <= ScreenSizes.TabletWidth,
					[styles.phone]: width <= ScreenSizes.PhoneWidth
				})}
			>
				<div className="container">
					<div className={styles.inner}>
						<aside
							ref={filterRef}
							className={classNames("wrapper", styles.sidebar, {
								[styles.open]: isOpen
							})}
						>
							<TasksFilters />
						</aside>
						<div className={styles.header}>
							<div className={styles.panel}>
								{width <= ScreenSizes.TabletWidth ? (
									<div className={styles.row}>
										<FilterButton
											onClick={handleClick}
											className={styles["filter-btn"]}
										/>
										<TasksSearchBar
											isFetching={isFetching}
											page={page}
											limit={limit}
										/>
									</div>
								) : (
									<TasksSearchBar
										isFetching={isFetching}
										page={page}
										limit={limit}
									/>
								)}
								<Button
									onClick={() => setIsVisible(true)}
									className={styles.btn}
									text="Створити"
								/>
							</div>
							<TasksSortDropdowns />
						</div>
						<div className={classNames("wrapper", styles.wrapper)}>
							<InfiniteScrollList
								hasMore={hasMore}
								isFetching={isFetching}
								onLoadMore={handleLoadMore}
							>
								<div className={styles.items}>
									{tasks.map((task: Task) => (
										<TaskItem
											key={task.uuid}
											id={task.uuid}
											creator={task.owner.profile}
											description={task.text}
											title={task.title}
											date={getParsedDate(task.created_at)}
											isActive={task.status === "open"}
										/>
									))}
								</div>
							</InfiniteScrollList>
						</div>
					</div>
				</div>
				<Modal
					title="Створити завдання"
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				>
					<TasksCreateForm onSubmit={handleSubmit} />
				</Modal>
			</div>
		</MainLayout>
	);
};

export default TasksPage;
