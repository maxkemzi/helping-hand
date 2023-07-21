import React, {FC} from "react";
import StatItem from "@components/StatItem/StatItem";
import styles from "./TaskStatsSection.module.scss";

interface TaskStatsSectionProps {
	createdDate: string;
	updatedDate: string;
}

const TaskStatsSection: FC<TaskStatsSectionProps> = ({
	createdDate,
	updatedDate
}) => (
	<div className={styles.stats}>
		<StatItem value={createdDate} title="Created" />
		<StatItem value={updatedDate} title="Updated" />
		<StatItem value="0" title="Views" />
	</div>
);

export default TaskStatsSection;
