import React, {FC, useState} from "react";
import classNames from "classnames";
import {PrimaryColor} from "@customTypes/index";
import FallbackImage from "@icons/FallbackImage/FallbackImage";
import styles from "./Avatar.module.scss";

interface AvatarProps {
	className?: string;
	imagePath: string;
	width?: number;
	height?: number;
	fallbackVariant?: PrimaryColor;
}

const Avatar: FC<AvatarProps> = ({
	className,
	fallbackVariant,
	imagePath,
	width,
	height
}) => {
	const [hasError, setHasError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const props = {
		width,
		height,
		className: classNames(className, styles.avatar)
	};

	if (!imagePath || hasError || isLoaded) {
		return <FallbackImage {...props} variant={fallbackVariant} />;
	}

	return (
		<img
			{...props}
			src={imagePath}
			onError={() => setHasError(true)}
			alt="avatar"
			onLoad={() => setIsLoaded(true)}
		/>
	);
};

export default Avatar;
