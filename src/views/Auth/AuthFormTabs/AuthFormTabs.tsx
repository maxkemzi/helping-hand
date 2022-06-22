import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import React, {Dispatch, FC, SetStateAction} from "react";
import styles from "./AuthFormTabs.module.scss";

interface AuthFormTabsProps {
	activeTab: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
}

const AuthFormTabs: FC<AuthFormTabsProps> = ({activeTab, setActiveTab}) => (
	<TabList className={styles.tabs} activeTab={activeTab}>
		<TabItem
			className={styles.tab}
			text="вхід"
			onClick={() => setActiveTab(0)}
			isActive={activeTab === 0}
		/>
		<TabItem
			className={styles.tab}
			text="Реєстрація"
			onClick={() => setActiveTab(1)}
			isActive={activeTab === 1}
		/>
	</TabList>
);

export default AuthFormTabs;
