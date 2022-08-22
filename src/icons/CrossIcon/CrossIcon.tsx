import React, {FC} from "react";
import classNames from "classnames";
import {IconProps} from "@customTypes/components";
import styles from "./CrossIcon.module.scss";

const CrossIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="22.7461"
			width="1.8"
			height="32.1661"
			rx="0.887054"
			transform="rotate(45 22.7461 0)"
			fill="#00D4C3"
		/>
		<rect
			y="1.25586"
			width="1.8"
			height="32.1661"
			rx="0.887054"
			transform="rotate(-45 0 1.25586)"
			fill="#00D4C3"
		/>
	</svg>
);

export default CrossIcon;
