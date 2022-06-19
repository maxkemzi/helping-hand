import React, {FC, useState} from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";
import FallbackImage, {
	FallbackImageVariant
} from "../../icons/FallbackImage/FallbackImage";

interface AvatarProps {
	className?: string;
	imagePath: string;
	width?: number;
	height?: number;
	fallbackVariant?: FallbackImageVariant;
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
