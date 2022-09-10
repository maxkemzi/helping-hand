import React from "react";
import StatItem from "@components/StatItem/StatItem";
import styles from "./TaskStatsSection.module.scss";

const TaskStatsSection = () => (
	<div className={styles.stats}>
		<StatItem value="2 години тому" title="Створено" />
		<StatItem value="1 годину тому" title="Змінено" />
		<StatItem value="6" title="Переглядів" />
	</div>
);

export default TaskStatsSection;
