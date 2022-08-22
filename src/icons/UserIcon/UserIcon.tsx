import React, {FC} from "react";
import {IconProps} from "@customTypes/components";

const UserIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={className}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 23.5358C0 17.7673 5.14396 13.091 11.4894 13.091H12.5106C18.856 13.091 24 17.7673 24 23.5358C24 23.7922 23.7714 24 23.4894 24H0.51064C0.228622 24 0 23.7922 0 23.5358Z"
			fill="#6C6880"
		/>
		<path
			d="M17.9999 5.45449C17.9999 8.46692 15.3136 10.909 11.9999 10.909C8.68616 10.909 5.99987 8.46692 5.99987 5.45449C5.99987 2.44206 8.68616 0 11.9999 0C15.3136 0 17.9999 2.44206 17.9999 5.45449Z"
			fill="#6C6880"
		/>
	</svg>
);

export default UserIcon;
