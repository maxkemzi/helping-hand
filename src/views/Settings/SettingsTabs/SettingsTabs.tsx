import React from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import styles from "./SettingsTabs.module.scss";

const SettingsTabs = () => (
	<TabList className={styles.tabs} variant="vertical">
		<TabItem text="Акаунт" to={SETTINGS_ACCOUNT_ROUTE} />

		<TabItem text="Інтеграція" to={SETTINGS_INTEGRATION_ROUTE} />

		<TabItem to={SETTINGS_INTERFACE_ROUTE} text="Інтерфейс" />
	</TabList>
);

export default SettingsTabs;
