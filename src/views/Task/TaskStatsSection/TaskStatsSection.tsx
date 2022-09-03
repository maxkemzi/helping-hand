import React from "react";
import StatItem from "@components/StatItem/StatItem";
import {useTranslation} from "react-i18next";
import styles from "./TaskStatsSection.module.scss";

const TaskStatsSection = () => {
	const {t} = useTranslation();
	return (
		<div className={styles.stats}>
			<div className={styles.stat}>
				<StatItem value="2 години тому" title={t("task.info.created")} />
			</div>
			<div className={styles.stat}>
				<StatItem value="1 годину тому" title={t("task.info.changed")} />
			</div>
			<div className={styles.stat}>
				<StatItem value="6" title={t("task.info.views")} />
			</div>
		</div>
	);
};

export default TaskStatsSection;
