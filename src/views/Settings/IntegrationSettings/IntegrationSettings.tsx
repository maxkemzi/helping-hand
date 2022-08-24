import React, {FC} from "react";
import MoodleIcon from "@images/moodle.svg";
import TritonIcon from "@images/triton.svg";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";
import Divider from "@components/Divider/Divider";
import styles from "./IntegrationSettings.module.scss";

const IntegrationSettings: FC = () => (
	<>
		<Typography className={styles.title} variant="h3" component="h3">
			Інтеграція
		</Typography>
		<IntegrationItem icon={MoodleIcon} text="Увійти за допомогою moodle" />
		<Divider className={styles.divider} />
		<IntegrationItem icon={TritonIcon} text="Увійти за допомогою triton" />
	</>
);

export default IntegrationSettings;
