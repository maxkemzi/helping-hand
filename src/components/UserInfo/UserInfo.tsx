import React, {FC} from "react";
import Avatar from "@components/Avatar/Avatar";
import Typography from "@components/Typography/Typography";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {PrimaryColor} from "@customTypes/components";
import styles from "./UserInfo.module.scss";

interface UserInfoProps {
	avatarPath: string;
	username: string;
	className?: string;
	path?: string;
	fallbackVariant?: PrimaryColor;
}

const UserInfo: FC<UserInfoProps> = ({
	avatarPath,
	path = "",
	username,
	className,
	fallbackVariant = "lighter"
}) => (
	<NavLink end to={path} className={classNames(className, styles.info)}>
		<div className={styles.inner}>
			<Avatar
				fallbackVariant={fallbackVariant}
				className={styles.avatar}
				imagePath={avatarPath}
			/>
			<Typography variant="body1" component="p">
				{username}
			</Typography>
		</div>
	</NavLink>
);

export default UserInfo;
