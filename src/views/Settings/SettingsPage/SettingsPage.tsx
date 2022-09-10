import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import classNames from "classnames";
import {Outlet} from "react-router-dom";
import SettingsTabs from "@views/Settings/SettingsTabs/SettingsTabs";
import MainLayout from "@components/MainLayout/MainLayout";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./SettingsPage.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const SettingsPage: FC = () => {
	const {width} = useWindowSize();
	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					<Typography
						className={styles.title}
						variant={width <= ScreenSizes.PhoneWidth ? "h3" : "h2"}
						component="h2"
					>
						Налаштування
					</Typography>
					<div
						className={classNames(styles.inner, {
							[styles.tablet]: width <= ScreenSizes.TabletWidth
						})}
					>
						<SettingsTabs />
						<div className={classNames("wrapper", styles.wrapper)}>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default SettingsPage;
