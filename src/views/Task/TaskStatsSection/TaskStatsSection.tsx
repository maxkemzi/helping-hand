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
		<StatItem value={createdDate} title="Створено" />
		<StatItem value={updatedDate} title="Змінено" />
		<StatItem value="6" title="Переглядів" />
	</div>
);

export default TaskStatsSection;
