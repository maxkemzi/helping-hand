import React from "react";
import Button from "@components/Button/Button";
import TasksSortDropdowns from "@views/Tasks/TasksSortDropdowns/TasksSortDropdowns";
import TasksSearchBar from "@views/Tasks/TasksSearchBar/TasksSearchBar";
import {ITask} from "@models/models";
import TaskItem from "@components/TaskItem/TaskItem";
import TasksFilters from "@views/Tasks/TasksFilters/TasksFilters";
import styles from "./TasksPage.module.scss";
import data from "../../../mock.json";

const TasksPage = () => (
	<div className={styles.page}>
		<div className="container">
			<div className={styles.inner}>
				<aside className={styles.sidebar}>
					<TasksFilters />
				</aside>
				<div>
					<div className={styles.header}>
						<div className={styles.panel}>
							<Button className={styles.btn} text="Створити" />
							<TasksSearchBar />
						</div>
						<TasksSortDropdowns />
					</div>
					<div className={styles.items}>
						{data.tasks.map((task: ITask) => (
							<TaskItem key={task.id} {...task} />
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default TasksPage;
