import React, {FC, useState} from "react";
import classNames from "classnames";
import FallbackImage from "@components/FallbackImage/FallbackImage";
import {PrimaryColor} from "@customTypes/components";
import styles from "./Avatar.module.scss";

interface AvatarProps {
	className?: string;
	imagePath: string;
	size?: number;
	fallbackVariant?: PrimaryColor;
}

const Avatar: FC<AvatarProps> = ({
	className,
	fallbackVariant,
	imagePath,
	size = 32
}) => {
	const [hasError, setHasError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	if (!imagePath || hasError || isLoaded) {
		return (
			<FallbackImage
				className={className}
				size={size}
				variant={fallbackVariant}
			/>
		);
	}

	return (
		<img
			className={classNames(className, styles.avatar)}
			width={size}
			height={size}
			src={imagePath}
			onError={() => setHasError(true)}
			alt="avatar"
			onLoad={() => setIsLoaded(true)}
		/>
	);
};

export default Avatar;
