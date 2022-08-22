import React, {FC} from "react";
import SeparatorItem from "@components/SeparatorItem/SeparatorItem";
import TaskTitleSection from "@views/Task/TaskTitleSection/TaskTitleSection";
import TaskStatsSection from "@views/Task/TaskStatsSection/TaskStatsSection";
import TaskQuestionSection from "@views/Task/TaskQuestionSection/TaskQuestionSection";
import TaskAnswersSection from "@views/Task/TaskAnswersSection/TaskAnswersSection";
import TaskAnswerFormSection from "@views/Task/TaskAnswerFormSection/TaskAnswerFormSection";
import {useParams} from "react-router-dom";
import MainLayout from "@components/MainLayout/MainLayout";
import mockData from "../../../mock.json";

const TaskPage: FC = () => {
	const {id} = useParams();
	console.log(id);
	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					<div className="wrapper">
						<SeparatorItem>
							<TaskTitleSection title="Title" tags={mockData.tags} />
						</SeparatorItem>
						<SeparatorItem>
							<TaskStatsSection />
						</SeparatorItem>
						<SeparatorItem>
							<TaskQuestionSection />
						</SeparatorItem>
						<SeparatorItem>
							<TaskAnswersSection />
						</SeparatorItem>
						<SeparatorItem>
							<TaskAnswerFormSection />
						</SeparatorItem>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default TaskPage;
