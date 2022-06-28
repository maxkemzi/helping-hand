import React, {FC} from "react";
import {IconProps} from "@customTypes/index";
import classNames from "classnames";
import styles from "./GoogleIcon.module.scss";

const GoogleIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 20}
		height={height || 17}
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_496_95)">
			<path
				d="M19.9999 10.2294C19.9999 9.54958 19.9437 8.86613 19.8237 8.19738H10.2005V12.0482H15.7113C15.4826 13.2902 14.7478 14.3888 13.6719 15.087V17.5856H16.9596C18.8903 15.8439 19.9999 13.2718 19.9999 10.2294Z"
				fill="#00D4C3"
			/>
			<path
				d="M10.2005 19.9997C12.9521 19.9997 15.2726 19.1142 16.9634 17.5856L13.6756 15.087C12.7609 15.6969 11.5801 16.0423 10.2042 16.0423C7.54257 16.0423 5.28577 14.2823 4.47602 11.9159H1.08333V14.4917C2.81529 17.8685 6.34294 19.9997 10.2005 19.9997Z"
				fill="#00D4C3"
			/>
			<path
				d="M4.47227 11.9159C4.04491 10.674 4.04491 9.32911 4.47227 8.08715V5.51136H1.08333C-0.363715 8.33701 -0.363715 11.6661 1.08333 14.4917L4.47227 11.9159Z"
				fill="#00D4C3"
			/>
			<path
				d="M10.2005 3.95707C11.655 3.93503 13.0608 4.4715 14.1143 5.45625L17.0271 2.6012C15.1827 0.903611 12.7347 -0.0296982 10.2005 -0.000302674C6.34294 -0.000302674 2.81529 2.13088 1.08333 5.51136L4.47227 8.08715C5.27827 5.71713 7.53882 3.95707 10.2005 3.95707Z"
				fill="#00D4C3"
			/>
		</g>
		<defs>
			<clipPath id="clip0_496_95">
				<rect width="20" height="20" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default GoogleIcon;