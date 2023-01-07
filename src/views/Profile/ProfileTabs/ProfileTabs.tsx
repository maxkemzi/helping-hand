import React, {FC} from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	PROFILE_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import styles from "./ProfileTabs.module.scss";

interface ProfileTabsProps {
	id: string;
}

const ProfileTabs: FC<ProfileTabsProps> = ({id}) => (
	<TabList className={styles.tabs} adaptiveLineSizing>
		<TabItem
			to={id ? `${PROFILE_ROUTE}/${id}/tasks` : PROFILE_TASKS_ROUTE}
			text="Завдання"
		/>

		<TabItem
			to={id ? `${PROFILE_ROUTE}/${id}/stats` : PROFILE_STATS_ROUTE}
			text="Статистика"
		/>
	</TabList>
);

export default ProfileTabs;
