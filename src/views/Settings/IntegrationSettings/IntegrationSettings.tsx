import React, {FC} from "react";
import MoodleIcon from "@images/moodle.svg";
import styles from "@views/Settings/AccountSettings/AccountSettings.module.scss";
import TritonIcon from "@images/triton.svg";
import SeparatorItem from "@components/SeparatorItem/SeparatorItem";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";

const IntegrationSettings: FC = () => (
	<>
		<Typography className={styles.title} variant="h3" component="h3">
			Інтеграція
		</Typography>
		<SeparatorItem>
			<IntegrationItem icon={MoodleIcon} text="Увійти за допомогою moodle" />
		</SeparatorItem>
		<SeparatorItem>
			<IntegrationItem icon={TritonIcon} text="Увійти за допомогою triton" />
		</SeparatorItem>
	</>
);

export default IntegrationSettings;
