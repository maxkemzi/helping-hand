import React, {FC} from "react";
import MoodleIcon from "@images/moodle.svg";
import TritonIcon from "@images/triton.svg";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";
import Divider from "@components/Divider/Divider";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./IntegrationSettings.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const IntegrationSettings: FC = () => {
	const {width} = useWindowSize();
	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				Інтеграція
			</Typography>
			<IntegrationItem
				icon={MoodleIcon}
				text={
					width <= ScreenSizes.SmTabletWidth
						? null
						: "Увійти за допомогою moodle"
				}
			/>
			<Divider className={styles.divider} />
			<IntegrationItem
				icon={TritonIcon}
				text={
					width <= ScreenSizes.SmTabletWidth
						? null
						: "Увійти за допомогою triton"
				}
			/>
		</>
	);
};

export default IntegrationSettings;
