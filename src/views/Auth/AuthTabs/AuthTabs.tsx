import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import React, {FC} from "react";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routes";
import {useTranslation} from "react-i18next";
import styles from "./AuthTabs.module.scss";

const AuthTabs: FC = () => {
	const {t} = useTranslation("translation", {keyPrefix: "auth.tabs"});
	return (
		<TabList className={styles.tabs} adaptiveLineSizing>
			<TabItem to={LOGIN_ROUTE} className={styles.tab} text={t("login")} />
			<TabItem to={SIGNUP_ROUTE} className={styles.tab} text={t("signup")} />
		</TabList>
	);
};

export default AuthTabs;
