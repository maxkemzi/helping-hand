import React, {FC, useState} from "react";
import classNames from "classnames";
import AccountSettings from "@views/Settings/AccountSettings/AccountSettings";
import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import IntegrationSettings from "@views/Settings/IntegrationSettings/IntegrationSettings";
import styles from "./SettingsPage.module.scss";

const SettingsPage: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.page}>
			<div className={classNames(styles.container, "container")}>
				<h2 className={styles.title}>Налаштування</h2>
				<div className={styles.inner}>
					<TabList
						className={styles.tabs}
						variant="vertical"
						activeTab={activeTab}
					>
						<TabItem
							variant="vertical"
							text="Акаунт"
							onClick={() => setActiveTab(0)}
							isActive={activeTab === 0}
						/>
						<TabItem
							variant="vertical"
							text="Інтеграція"
							onClick={() => setActiveTab(1)}
							isActive={activeTab === 1}
						/>
						<TabItem
							variant="vertical"
							text="Інтерфейс"
							onClick={() => setActiveTab(2)}
							isActive={activeTab === 2}
						/>
					</TabList>
					<div className={styles.content}>
						{activeTab === 0 && <AccountSettings />}
						{activeTab === 1 && <IntegrationSettings />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
