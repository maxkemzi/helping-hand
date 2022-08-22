import React, {FC} from "react";
import {IconProps} from "@customTypes/components";

const HomeIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={className}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 0C12 0 4.5768 7.12 0.4284 10.976C0.1848 11.2213 0 11.5787 0 12C0 12.7373 0.5364 13.3333 1.2 13.3333H3.6V22.6667C3.6 23.404 4.1364 24 4.8 24H8.4C9.0636 24 9.6 23.4027 9.6 22.6667V17.3333H14.4V22.6667C14.4 23.4027 14.9364 24 15.6 24H19.2C19.8636 24 20.4 23.404 20.4 22.6667V13.3333H22.8C23.4636 13.3333 24 12.7373 24 12C24 11.5787 23.8152 11.2213 23.5404 10.976C19.4208 7.12 12 0 12 0Z"
			fill="#6C6880"
		/>
	</svg>
);

export default HomeIcon;
