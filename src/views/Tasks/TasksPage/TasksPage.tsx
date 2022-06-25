import React, {useState} from "react";
import Button from "@components/Button/Button";
import TasksSortDropdowns from "@views/Tasks/TasksSortDropdowns/TasksSortDropdowns";
import TasksSearchBar from "@views/Tasks/TasksSearchBar/TasksSearchBar";
import {ITask} from "@customTypes/index";
import TaskItem from "@components/TaskItem/TaskItem";
import TasksFilters from "@views/Tasks/TasksFilters/TasksFilters";
import Modal from "@components/Modal/Modal";
import TasksCreateForm from "@views/Tasks/TasksCreateForm/TasksCreateForm";
import styles from "./TasksPage.module.scss";
import data from "../../../mock.json";

const TasksPage = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className={styles.page}>
			<div className="container">
				<div className={styles.inner}>
					<aside className={styles.sidebar}>
						<TasksFilters />
					</aside>
					<div>
						<div className={styles.header}>
							<div className={styles.panel}>
								<Button
									onClick={() => setIsVisible(true)}
									className={styles.btn}
									text="Створити"
								/>
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
			<Modal
				title="Створити завдання"
				isVisible={isVisible}
				setIsVisible={setIsVisible}
			>
				<TasksCreateForm />
			</Modal>
		</div>
	);
};

export default TasksPage;
