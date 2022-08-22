import React, {FC} from "react";
import {IconProps} from "@customTypes/components";
import classNames from "classnames";
import styles from "./TelegramIcon.module.scss";

const TelegramIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 29}
		height={height || 24}
		viewBox="0 0 29 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M28.9174 2.18489L24.5411 22.5513C24.2109 23.9887 23.3499 24.3464 22.1264 23.6692L15.4584 18.8204L12.2409 21.8741C11.8848 22.2254 11.587 22.5193 10.9008 22.5193L11.3799 15.8178L23.7383 4.79776C24.2757 4.32502 23.6218 4.06309 22.9032 4.53583L7.62507 14.0291L1.0477 11.9975C-0.383011 11.5567 -0.408906 10.5857 1.34549 9.90852L27.0723 0.127807C28.2635 -0.312996 29.3058 0.389733 28.9174 2.18489Z"
			fill="#00D4C3"
		/>
	</svg>
);
export default TelegramIcon;
