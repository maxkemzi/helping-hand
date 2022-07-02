import React, {FC} from "react";
import {IconProps} from "@customTypes/index";

const SearchIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={className}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.9621 3.25129C18.1278 6.4176 18.1001 11.6146 14.8561 14.8591C11.6122 18.1036 6.41654 18.1313 3.25093 14.9651C0.0852156 11.7988 0.112923 6.60186 3.35689 3.35728C6.60078 0.112795 11.7965 0.0850923 14.9621 3.25129Z"
			stroke="#6C6880"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M23.064 23.064L15.3965 15.3965"
			stroke="#6C6880"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default SearchIcon;
