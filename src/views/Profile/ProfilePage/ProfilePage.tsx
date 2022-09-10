import React from "react";
import Avatar from "@components/Avatar/Avatar";
import Typography from "@components/Typography/Typography";
import {Outlet} from "react-router-dom";
import ProfileTabs from "@views/Profile/ProfileTabs/ProfileTabs";
import MainLayout from "@components/MainLayout/MainLayout";
import {IoCheckmark} from "react-icons/io5";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import styles from "./ProfilePage.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const ProfilePage = () => {
	const {width} = useWindowSize();
	return (
		<MainLayout>
			<div className="page">
				<div className="container container--small">
					<div
						className={classNames(styles.header, {
							[styles.phone]: width <= ScreenSizes.PhoneWidth
						})}
					>
						<Avatar
							className={styles.avatar}
							imagePath=""
							size={150}
							fallbackVariant="lighter"
						/>
						<div className={styles.user}>
							<div className={styles.name}>
								<Typography
									className={styles.username}
									variant="h3"
									component="h3"
								>
									Max Kemzi
								</Typography>
								<IoCheckmark className={styles.icon} size={24} />
							</div>
							<Typography
								className={styles.description}
								variant="subtitle2"
								component="p"
							>
								sdfdsfsdfds
							</Typography>
							<Typography variant="h4" component="h4">
								Expert
							</Typography>
						</div>
					</div>
					<ProfileTabs />
					<div className={styles.content}>
						<Outlet />
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ProfilePage;
