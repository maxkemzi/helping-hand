import React, {FC} from "react";
import {PrimaryColor} from "@customTypes/components";
import {IoPerson} from "react-icons/io5";
import classNames from "classnames";
import styles from "./FallbackImage.module.scss";

interface FallbackImageProps {
	variant?: PrimaryColor;
	size?: number;
	className?: string;
}

const FallbackImage: FC<FallbackImageProps> = ({
	className,
	size = 32,
	variant
}) => (
	<div
		style={{width: size, height: size}}
		className={classNames(className, styles.wrapper, styles[variant])}
	>
		<IoPerson className={styles.icon} size={Math.round(size / 1.75)} />
	</div>
);

export default FallbackImage;
