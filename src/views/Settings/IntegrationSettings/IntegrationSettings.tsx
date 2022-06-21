import React, {FC} from "react";
import {ReactComponent as MoodleIcon} from "@images/moodle.svg";
import styles from "@views/Settings/AccountSettings/AccountSettings.module.scss";
import {ReactComponent as TritonIcon} from "@images/triton.svg";
import SettingsItem from "@components/SettingsItem/SettingsItem";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";

const IntegrationSettings: FC = () => (
	<div>
		<h3 className={styles.title}>Інтеграція</h3>
		<SettingsItem>
			<IntegrationItem icon={MoodleIcon} text="Увійти за допомогою moodle" />
		</SettingsItem>
		<SettingsItem>
			<IntegrationItem icon={TritonIcon} text="Увійти за допомогою triton" />
		</SettingsItem>
	</div>
);

export default IntegrationSettings;
