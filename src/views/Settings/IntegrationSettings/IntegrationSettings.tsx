import React, {FC} from "react";
import MoodleIcon from "@images/moodle.svg";
import TritonIcon from "@images/triton.svg";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";
import Divider from "@components/Divider/Divider";
import {useTranslation} from "react-i18next";
import styles from "./IntegrationSettings.module.scss";

const IntegrationSettings: FC = () => {
	const {t} = useTranslation("translation", {
		keyPrefix: "settings.tabs.integration.content"
	});
	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				{t("title")}
			</Typography>
			<IntegrationItem icon={MoodleIcon} text={t("integrations.moodle")} />
			<Divider className={styles.divider} />
			<IntegrationItem icon={TritonIcon} text={t("integrations.triton")} />
		</>
	);
};

export default IntegrationSettings;
