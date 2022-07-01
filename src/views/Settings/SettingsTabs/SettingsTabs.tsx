import React, {useState} from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import {NavLink} from "react-router-dom";
import styles from "./SettingsTabs.module.scss";

const SettingsTabs = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabList className={styles.tabs} activeTab={activeTab} variant="vertical">
			<NavLink to={SETTINGS_ACCOUNT_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(0)}
					variant="vertical"
					text="Акаунт"
					isActive={activeTab === 0}
				/>
			</NavLink>

			<NavLink to={SETTINGS_INTEGRATION_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(1)}
					variant="vertical"
					text="Інтеграція"
					isActive={activeTab === 1}
				/>
			</NavLink>

			<NavLink to={SETTINGS_INTERFACE_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(2)}
					variant="vertical"
					text="Інтерфейс"
					isActive={activeTab === 2}
				/>
			</NavLink>
		</TabList>
	);
};

export default SettingsTabs;
