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
		width={width || 25}
		height={height || 25}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path className={styles.bg} d="M25 0H0V25H25V0Z" fill="#2F2B44" />
		<path
			d="M6 18.7486C6 15.624 8.78631 13.091 12.2234 13.091H12.7766C16.2137 13.091 19 15.624 19 18.7486C19 18.8874 18.8762 19 18.7234 19H6.2766C6.12384 19 6 18.8874 6 18.7486Z"
			fill="#00D4C3"
		/>
		<path
			d="M15.7499 8.95452C15.7499 10.5863 14.2949 11.909 12.4999 11.909C10.705 11.909 9.24993 10.5863 9.24993 8.95452C9.24993 7.32278 10.705 6 12.4999 6C14.2949 6 15.7499 7.32278 15.7499 8.95452Z"
			fill="#00D4C3"
		/>
	</svg>
);

export default FallbackImage;
