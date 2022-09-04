import React, {useRef, useState} from "react";
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
import {useTranslation} from "react-i18next";
import styles from "./TasksPage.module.scss";
import data from "../../../mock.json";
import useWindowSize from "../../../hooks/useWindowSize";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const TasksPage = () => {
	const {width} = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const filterRef = useRef(null);

	const {t} = useTranslation();

	const handleClick = () => setIsOpen(!isOpen);

	useListenClickOutside(filterRef, () => setIsOpen(false));

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
								{!(
									width <= ScreenSizes.PhoneWidth ||
									width <= ScreenSizes.TabletWidth
								) && (
									<Button
										onClick={() => setIsVisible(true)}
										className={styles.btn}
										text={t("tasks.createButtonText")}
									/>
								)}
								{width <= ScreenSizes.PhoneWidth ? (
									<div className={styles.row}>
										<FilterButton
											onClick={handleClick}
											className={styles["filter-btn"]}
										/>
										<Button
											onClick={() => setIsVisible(true)}
											className={styles.btn}
											text={t("tasks.createButtonText")}
										/>
									</div>
								) : (
									width <= ScreenSizes.TabletWidth && (
										<>
											<FilterButton
												onClick={handleClick}
												className={styles["filter-btn"]}
											/>
											<Button
												onClick={() => setIsVisible(true)}
												className={styles.btn}
												text={t("tasks.createButtonText")}
											/>
										</>
									)
								)}

								<TasksSearchBar />
							</div>
							<TasksSortDropdowns />
						</div>
						<div className={classNames("wrapper", styles.items)}>
							{data.tasks.map((task: Task) => (
								<TaskItem key={task.id} {...task} />
							))}
						</div>
					</div>
				</div>
				<Modal
					title={t("tasks.createModal.title")}
					isVisible={isVisible}
					setIsVisible={setIsVisible}
				>
					<TasksCreateForm />
				</Modal>
			</div>
		</MainLayout>
	);
};

export default TasksPage;
