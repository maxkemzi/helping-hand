import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";
import TritonIcon from "@images/triton.svg";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {FC} from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./IntegrationSettings.module.scss";

const IntegrationSettings: FC = () => {
	const {width} = useWindowSize();

	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				Integration
			</Typography>
			<IntegrationItem
				isConnected={false}
				icon={TritonIcon}
				text={
					width <= ScreenSizes.SmTabletWidth ? null : "Sign in using triton"
				}
			/>
		</>
	);
};

export default IntegrationSettings;
