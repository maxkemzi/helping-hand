import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./Typography.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "body1"
	| "subtitle1"
	| "subtitle2"
	| "h5";

interface TypographyProps {
	className?: string;
	variant: TypographyVariant;
	component: keyof JSX.IntrinsicElements;
	children: ReactNode;
}

const Typography: FC<TypographyProps> = ({
	className,
	variant,
	component: Component,
	children
}) => {
	const {width} = useWindowSize();

	return (
		<Component
			className={classNames(className, styles.typography, styles[variant], {
				[styles["sm-tablet"]]: width <= ScreenSizes.SmTabletWidth,
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
			{children}
		</Component>
	);
};

export default Typography;
