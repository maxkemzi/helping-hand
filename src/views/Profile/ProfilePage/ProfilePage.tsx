import React, {useEffect} from "react";
import Avatar from "@components/Avatar/Avatar";
import Typography from "@components/Typography/Typography";
import {Outlet, useParams} from "react-router-dom";
import ProfileTabs from "@views/Profile/ProfileTabs/ProfileTabs";
import MainLayout from "@components/MainLayout/MainLayout";
import {IoCheckmark} from "react-icons/io5";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import {getProfile} from "@store/profile/profile.selectors";
import {getIsAppInitializing} from "@store/app/app.selectors";
import styles from "./ProfilePage.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import TasksService from "../../../services/tasks/tasks.service";
import AppService from "../../../services/app/app.service";

const ProfilePage = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const {width} = useWindowSize();
	const profile = useAppSelector(getProfile);
	const isInitializing = useAppSelector(getIsAppInitializing);

	useEffect(() => {
		dispatch(AppService.initializeProfilePage(id));
	}, [dispatch, id]);

	useEffect(() => () => dispatch(TasksService.clear()), [dispatch]);

	return (
		<MainLayout>
			{isInitializing ? (
				"Loading..."
			) : (
				<div className="page">
					<div className="container container--small">
						<div
							className={classNames(styles.header, {
								[styles.phone]: width <= ScreenSizes.PhoneWidth
							})}
						>
							<Avatar
								className={styles.avatar}
								imagePath={profile.photo}
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
										{profile.username}
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
						<ProfileTabs id={id} />
						<div className={styles.content}>
							<Outlet />
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
};

export default ProfilePage;
