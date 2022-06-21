import React, {FC} from "react";
import {IconProps} from "@customTypes/index";
import classNames from "classnames";
import styles from "./StatusIcon.module.scss";

type StatusIconVariant = "active" | "inactive";

const StatusIcon: FC<IconProps & {variant?: StatusIconVariant}> = ({
	width,
	variant = "inactive",
	height,
	className
}) => (
	<svg
		className={classNames(className, styles[variant])}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.0051994 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9964 8.8185 22.731 5.76834 20.4813 3.51868C18.2317 1.26902 15.1815 0.00358448 12 0V0ZM12 22.2857C9.27206 22.2857 6.65585 21.202 4.72691 19.2731C2.79796 17.3441 1.71429 14.7279 1.71429 12C1.71429 9.27206 2.79796 6.65585 4.72691 4.7269C6.65585 2.79796 9.27206 1.71429 12 1.71429V12L19.2696 19.2698C18.3162 20.2265 17.1832 20.9854 15.9357 21.503C14.6882 22.0206 13.3506 22.2866 12 22.2857V22.2857Z"
			fill="#6C6880"
		/>
	</svg>
);

export default StatusIcon;
