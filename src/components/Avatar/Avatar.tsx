import React, {FC} from "react";
import classNames from "classnames";
import Thumbnail from "@images/thumbnail.svg";
import styles from "./Avatar.module.scss";

interface AvatarProps {
	className?: string;
	imagePath: string;
	width?: number;
	height?: number;
}

const Avatar: FC<AvatarProps> = ({className, imagePath, width, height}) => {
	const path: string = imagePath || Thumbnail;

	return (
		<img
			className={classNames(className, styles.avatar)}
			src={path}
			width={width || 32}
			height={height || 32}
			alt="avatar"
		/>
	);
};

export default Avatar;
