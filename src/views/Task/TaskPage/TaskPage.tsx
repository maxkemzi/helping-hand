import React, {FC} from "react";
import TaskTitleSection from "@views/Task/TaskTitleSection/TaskTitleSection";
import TaskStatsSection from "@views/Task/TaskStatsSection/TaskStatsSection";
import TaskQuestionSection from "@views/Task/TaskQuestionSection/TaskQuestionSection";
import TaskAnswersSection from "@views/Task/TaskAnswersSection/TaskAnswersSection";
import TaskAnswerFormSection from "@views/Task/TaskAnswerFormSection/TaskAnswerFormSection";
import {useParams} from "react-router-dom";
import MainLayout from "@components/MainLayout/MainLayout";
import Divider from "@components/Divider/Divider";
import mockData from "../../../mock.json";
import styles from "./TaskPage.module.scss";

const TaskPage: FC = () => {
	const {id} = useParams();
	console.log(id);
	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					<div className="wrapper">
						<TaskTitleSection title="Title" tags={mockData.tags} />
						<Divider className={styles.divider} />
						<TaskStatsSection />
						<Divider className={styles.divider} />
						<TaskQuestionSection />
						<Divider className={styles.divider} />
						<TaskAnswersSection />
						<Divider className={styles.divider} />
						<TaskAnswerFormSection />
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default TaskPage;
