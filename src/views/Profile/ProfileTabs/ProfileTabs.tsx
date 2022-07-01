import React, {useState} from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	PROFILE_ACHIEVES_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import {NavLink} from "react-router-dom";
import styles from "./ProfileTabs.module.scss";

const ProfileTabs = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabList className={styles.tabs} activeTab={activeTab}>
			<NavLink to={PROFILE_TASKS_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(0)}
					isActive={activeTab === 0}
					text="Завдання"
				/>
			</NavLink>

			<NavLink to={PROFILE_ACHIEVES_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(1)}
					isActive={activeTab === 1}
					text="Досягнення"
				/>
			</NavLink>

			<NavLink to={PROFILE_STATS_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(2)}
					isActive={activeTab === 2}
					text="Статистика"
				/>
			</NavLink>
		</TabList>
	);
};

export default ProfileTabs;
