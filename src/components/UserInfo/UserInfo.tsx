import React, {FC} from "react";
import Avatar from "@components/Avatar/Avatar";
import Typography from "@components/Typography/Typography";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import styles from "./UserInfo.module.scss";

interface UserInfoProps {
	avatarPath: string;
	username: string;
	className?: string;
	path?: string;
}

const UserInfo: FC<UserInfoProps> = ({
	avatarPath,
	path = "",
	username,
	className
}) => (
	<NavLink to={path} className={classNames(className, styles.info)}>
		<Avatar className={styles.avatar} imagePath={avatarPath} />
		<Typography variant="body1" component="p">
			{username}
		</Typography>
	</NavLink>
);

export default UserInfo;
