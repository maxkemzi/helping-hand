import React, {FC} from "react";
import classNames from "classnames";
import {IconProps, PrimaryColor} from "@customTypes/index";
import styles from "./FallbackImage.module.scss";

const FallbackImage: FC<IconProps & {variant?: PrimaryColor}> = ({
	className,
	width,
	height,
	variant = ""
}) => (
	<svg
		className={classNames(className, styles.icon, styles[variant])}
		width={width || 32}
		height={height || 32}
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path className={styles.bg} d="M32 0H0V32H32V0Z" fill="#2F2B44" />
		<path
			d="M8 24.6518C8 20.3255 11.4293 16.8183 15.6596 16.8183H16.3404C20.5707 16.8183 24 20.3255 24 24.6518C24 24.8441 23.8476 25 23.6596 25H8.34043C8.15241 25 8 24.8441 8 24.6518Z"
			fill="#00D4C3"
		/>
		<path
			d="M19.9999 11.0909C19.9999 13.3502 18.2091 15.1817 15.9999 15.1817C13.7908 15.1817 11.9999 13.3502 11.9999 11.0909C11.9999 8.83154 13.7908 7 15.9999 7C18.2091 7 19.9999 8.83154 19.9999 11.0909Z"
			fill="#00D4C3"
		/>
	</svg>
);

export default FallbackImage;
