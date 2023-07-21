import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import React, {FC} from "react";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routes";
import styles from "./AuthTabs.module.scss";

const AuthTabs: FC = () => (
	<TabList className={styles.tabs} adaptiveLineSizing>
		<TabItem to={LOGIN_ROUTE} className={styles.tab} text="login" />
		<TabItem to={SIGNUP_ROUTE} className={styles.tab} text="signup" />
	</TabList>
);

export default AuthTabs;
