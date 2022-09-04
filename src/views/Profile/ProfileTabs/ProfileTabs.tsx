import React from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	PROFILE_ACHIEVES_ROUTE,
	PROFILE_STATS_ROUTE,
	PROFILE_TASKS_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import {useTranslation} from "react-i18next";
import styles from "./ProfileTabs.module.scss";

const ProfileTabs = () => {
	const {t} = useTranslation("translation", {keyPrefix: "profile.tabs"});
	return (
		<TabList className={styles.tabs} adaptiveLineSizing>
			<TabItem to={PROFILE_TASKS_ROUTE} text={t("tasks")} />

			<TabItem to={PROFILE_ACHIEVES_ROUTE} text={t("achievements")} />

			<TabItem to={PROFILE_STATS_ROUTE} text={t("statistics.name")} />
		</TabList>
	);
};

export default ProfileTabs;
