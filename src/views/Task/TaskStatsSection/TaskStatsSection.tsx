import React from "react";
import StatItem from "@components/StatItem/StatItem";
import styles from "./TaskStatsSection.module.scss";

const TaskStatsSection = () => (
	<div className={styles.stats}>
		<div className={styles.stat}>
			<StatItem value="2 години тому" title="Створено" />
		</div>
		<div className={styles.stat}>
			<StatItem value="1 годину тому" title="Змінено" />
		</div>
		<div className={styles.stat}>
			<StatItem value="6" title="Переглядів" />
		</div>
	</div>
);

export default TaskStatsSection;
