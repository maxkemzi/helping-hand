import React from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import styles from "./ProfileTabs.module.scss";

const ProfileTabs = () => (
	<TabList className={styles.tabs} adaptiveLineSizing>
		<TabItem to={PROFILE_TASKS_ROUTE} text="Завдання" />

		<TabItem to={PROFILE_STATS_ROUTE} text="Статистика" />
	</TabList>
);

export default ProfileTabs;
