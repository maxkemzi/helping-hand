import React, {FC, useState} from "react";
import AccountSettings from "@views/Settings/AccountSettings/AccountSettings";
import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import IntegrationSettings from "@views/Settings/IntegrationSettings/IntegrationSettings";
import InterfaceSettings from "@views/Settings/InterfaceSettings/InterfaceSettings";
import Typography from "@components/Typography/Typography";
import classNames from "classnames";
import styles from "./SettingsPage.module.scss";

const SettingsPage: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="page">
			<div className="container container--small">
				<Typography className={styles.title} variant="h2" component="h2">
					Налаштування
				</Typography>
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
					<div className={classNames("wrapper", styles.wrapper)}>
						{activeTab === 0 && <AccountSettings />}
						{activeTab === 1 && <IntegrationSettings />}
						{activeTab === 2 && <InterfaceSettings />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
