import TabItem from "@components/TabItem/TabItem";
import TabList from "@components/TabList/TabList";
import {
	PROFILE_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE
} from "@utils/constants/routes";
import React, {FC} from "react";
import {useParams} from "react-router-dom";
import styles from "./ProfileTabs.module.scss";

const ProfileTabs: FC = () => {
	const {id} = useParams();

	return (
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
};

export default ProfileTabs;
