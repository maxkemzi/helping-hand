import React, {FC} from "react";
import classNames from "classnames";
import styles from "./FallbackImage.module.scss";

export type FallbackImageVariant = "light" | "lighter";

interface FallbackImageProps {
	className?: string;
	variant?: FallbackImageVariant;
	width?: number;
	height?: number;
}

const FallbackImage: FC<FallbackImageProps> = ({
	className,
	width,
	height,
	variant = ""
}) => (
	<svg
		className={classNames(className, styles[variant])}
		width={width || 32}
		height={height || 32}
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M32 0H0V32H32V0Z" fill="#252139" />
		<path
			d="M15.617 17.3002H16.383C20.8268 17.3002 24.4366 20.8712 24.4992 25.3002H7.50083C7.56341 20.8712 11.1732 17.3002 15.617 17.3002ZM19.9999 10.5C19.9999 12.7091 18.209 14.5 15.9999 14.5C13.7908 14.5 11.9999 12.7091 11.9999 10.5C11.9999 8.29086 13.7908 6.5 15.9999 6.5C18.209 6.5 19.9999 8.29086 19.9999 10.5Z"
			stroke="url(#paint0_linear_504_67)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_504_67"
				x1="16"
				y1="6"
				x2="16"
				y2="25.8002"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#00D4C3" />
				<stop offset="1" stopColor="#009AD2" />
			</linearGradient>
		</defs>
	</svg>
);

export default FallbackImage;
