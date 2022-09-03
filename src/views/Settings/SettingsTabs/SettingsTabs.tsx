import React from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import {useTranslation} from "react-i18next";
import styles from "./SettingsTabs.module.scss";

const SettingsTabs = () => {
	const {t} = useTranslation("translation", {keyPrefix: "settings.tabs"});
	return (
		<TabList className={styles.tabs} variant="vertical">
			<TabItem text={t("account.name")} to={SETTINGS_ACCOUNT_ROUTE} />

			<TabItem text={t("integration.name")} to={SETTINGS_INTEGRATION_ROUTE} />

			<TabItem to={SETTINGS_INTERFACE_ROUTE} text={t("interface.name")} />
		</TabList>
	);
};

export default SettingsTabs;
