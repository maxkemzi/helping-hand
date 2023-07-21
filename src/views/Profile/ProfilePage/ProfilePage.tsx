import Avatar from "@components/Avatar/Avatar";
import MainLayout from "@components/MainLayout/MainLayout";
import Typography from "@components/Typography/Typography";
import {getAuthUser} from "@store/auth/auth.selectors";
import {
	getIsProfileFetching,
	getProfile
} from "@store/profile/profile.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import ProfileTabs from "@views/Profile/ProfileTabs/ProfileTabs";
import classNames from "classnames";
import React, {useEffect} from "react";
import {IoCheckmark} from "react-icons/io5";
import {Outlet, useParams} from "react-router-dom";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import useWindowSize from "../../../hooks/useWindowSize";
import TasksService from "../../../services/tasks/tasks.service";
import UsersService from "../../../services/users/users.service";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const {width} = useWindowSize();
	const profile = useAppSelector(getProfile);
	const user = useAppSelector(getAuthUser);
	const isProfileFetching = useAppSelector(getIsProfileFetching);
	const id = params.id || user.id;

	useEffect(() => {
		dispatch(UsersService.fetchOne(id));
	}, [dispatch, id]);

	useEffect(() => () => dispatch(TasksService.clear()), [dispatch]);

	return (
		<MainLayout>
			{isProfileFetching ? (
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
									{profile.description || "Profile description"}
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
			)}
		</MainLayout>
	);
};

export default ProfilePage;
