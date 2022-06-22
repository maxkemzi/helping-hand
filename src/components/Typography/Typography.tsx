import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Typography.module.scss";

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
}) => (
	<Component
		className={classNames(className, styles.typography, styles[variant])}
	>
		{children}
	</Component>
);

export default Typography;
