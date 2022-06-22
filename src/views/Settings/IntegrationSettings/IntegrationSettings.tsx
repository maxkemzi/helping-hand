import React, {FC} from "react";
import MoodleIcon from "@images/moodle.svg";
import styles from "@views/Settings/AccountSettings/AccountSettings.module.scss";
import TritonIcon from "@images/triton.svg";
import SettingsItem from "@components/SettingsItem/SettingsItem";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";

const IntegrationSettings: FC = () => (
	<>
		<Typography className={styles.title} variant="h3" component="h3">
			Інтеграція
		</Typography>
		<SettingsItem>
			<IntegrationItem icon={MoodleIcon} text="Увійти за допомогою moodle" />
		</SettingsItem>
		<SettingsItem>
			<IntegrationItem icon={TritonIcon} text="Увійти за допомогою triton" />
		</SettingsItem>
	</>
);

export default IntegrationSettings;
