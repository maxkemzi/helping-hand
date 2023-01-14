import Button from "@components/Button/Button";
import FilterButton from "@components/FilterButton/FilterButton";
import InfiniteScrollList from "@components/InfiniteScrollList/InfiniteScrollList";
import MainLayout from "@components/MainLayout/MainLayout";
import TaskItem from "@components/TaskItem/TaskItem";
import {getIsAppInitializing} from "@store/app/app.selectors";
import {
	getHasMoreTasks,
	getIsTasksFetching,
	getTasks,
	getTasksLimit,
	getTasksPage,
	getTasksSearchQuery
} from "@store/tasks/tasks.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import getParsedDate from "@utils/helpers/getParsedDate";
import TasksFilters from "@views/Tasks/TasksFilters/TasksFilters";
import TasksSearchBar from "@views/Tasks/TasksSearchBar/TasksSearchBar";
import TasksSortDropdowns from "@views/Tasks/TasksSortDropdowns/TasksSortDropdowns";
import classNames from "classnames";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {ModalTypes} from "@utils/constants/modal";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import useWindowSize from "../../../hooks/useWindowSize";
import AppService from "../../../services/app/app.service";
import TasksService from "../../../services/tasks/tasks.service";
import styles from "./TasksPage.module.scss";
import {useModalContext} from "../../../contexts/ModalContext";

const TasksPage = () => {
	const dispatch = useAppDispatch();
	const {width} = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);
	const {openModal, closeModal} = useModalContext();
	const filterRef = useRef(null);
	const tasks = useAppSelector(getTasks);
	const hasMore = useAppSelector(getHasMoreTasks);
	const isFetching = useAppSelector(getIsTasksFetching);
	const page = useAppSelector(getTasksPage);
	const limit = useAppSelector(getTasksLimit);
	const searchQuery = useAppSelector(getTasksSearchQuery);
	const isInitializing = useAppSelector(getIsAppInitializing);

	const handleClick = () => setIsOpen(!isOpen);

	useListenClickOutside(filterRef, () => setIsOpen(false));

	useEffect(() => {
		dispatch(AppService.initializeTasksPage({limit}));
	}, [dispatch, limit]);

	useEffect(() => () => dispatch(TasksService.clear()), [dispatch]);

	const handleLoadMore = useCallback(
		() =>
			dispatch(
				TasksService.fetchMore({limit, page: page + 1, search: searchQuery})
			),
		[dispatch, limit, page, searchQuery]
	);

	const handleCreateModalOpen = () =>
		openModal(ModalTypes.CreateTask, {onClose: closeModal});

	return (
		<MainLayout>
			{isInitializing ? (
				"Loading..."
			) : (
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
											<TasksSearchBar limit={limit} isFetching={isFetching} />
										</div>
									) : (
										<TasksSearchBar limit={limit} isFetching={isFetching} />
									)}
									<Button
										onClick={handleCreateModalOpen}
										className={styles.btn}
										text="Створити"
									/>
								</div>
								<TasksSortDropdowns />
							</div>
							<div className={classNames("wrapper", styles.wrapper)}>
								<InfiniteScrollList
									searchIsEmpty={searchQuery.length === 0}
									isEmpty={tasks.length === 0}
									hasMore={hasMore}
									isFetching={isFetching}
									onLoadMore={handleLoadMore}
								>
									<div className={styles.items}>
										{tasks.map(task => (
											<TaskItem
												key={task.uuid}
												id={task.uuid}
												tags={task.tags}
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
				</div>
			)}
		</MainLayout>
	);
};

export default TasksPage;
