import React, {FC} from "react";
import TritonIcon from "@images/triton.svg";
import IntegrationItem from "@components/IntegrationItem/IntegrationItem";
import Typography from "@components/Typography/Typography";
import ScreenSizes from "@utils/constants/screenSizes";
import {getIsIntegrationsConnected} from "@store/integrations/integrations.selectors";
import {
	INTEGRATION_AUTH_ROUTE,
	INTEGRATION_ROUTE
} from "@utils/constants/routes";
import {useNavigate} from "react-router-dom";
import styles from "./IntegrationSettings.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import IntegrationsService from "../../../services/integrations/integrations.service";

const IntegrationSettings: FC = () => {
	const dispatch = useAppDispatch();
	const {width} = useWindowSize();
	const isConnected = useAppSelector(getIsIntegrationsConnected);
	const navigate = useNavigate();

	const handleClick = () => {
		window.open(`${process.env.APP_URL}${INTEGRATION_AUTH_ROUTE}`, "_blank");
	};

	const handleConnectedClick = () => navigate(INTEGRATION_ROUTE);

	const handleDelete = () => dispatch(IntegrationsService.delete());

	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				Інтеграція
			</Typography>
			<IntegrationItem
				isConnected={isConnected}
				onClick={handleClick}
				onConnectedClick={handleConnectedClick}
				icon={TritonIcon}
				onDelete={handleDelete}
				text={
					width <= ScreenSizes.SmTabletWidth
						? null
						: "Увійти за допомогою triton"
				}
			/>
			{/* <Divider className={styles.divider} /> */}
			{/* <IntegrationItem */}
			{/*	isConnected={false} */}
			{/*	icon={MoodleIcon} */}
			{/*	text={ */}
			{/*		width <= ScreenSizes.SmTabletWidth */}
			{/*			? null */}
			{/*			: "Увійти за допомогою moodle" */}
			{/*	} */}
			{/* /> */}
		</>
	);
};

export default IntegrationSettings;
