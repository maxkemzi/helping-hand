import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import React, {FC, useState} from "react";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routes";
import {NavLink} from "react-router-dom";
import styles from "./AuthTabs.module.scss";

const AuthTabs: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabList className={styles.tabs} activeTab={activeTab}>
			<NavLink className={styles.item} to={LOGIN_ROUTE}>
				<TabItem
					className={styles.tab}
					onClick={() => setActiveTab(0)}
					text="вхід"
					isActive={activeTab === 0}
				/>
			</NavLink>
			<NavLink className={styles.item} to={SIGNUP_ROUTE}>
				<TabItem
					onClick={() => setActiveTab(1)}
					className={styles.tab}
					isActive={activeTab === 1}
					text="Реєстрація"
				/>
			</NavLink>
		</TabList>
	);
};

export default AuthTabs;
