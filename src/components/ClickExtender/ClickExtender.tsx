import React, {ElementType, ReactNode} from "react";
import classNames from "classnames";
import styles from "./ClickExtender.module.scss";

interface ClickExtenderProps<T extends ElementType> {
	children: ReactNode;
	as?: T;
	isActive?: boolean;
}

const ClickExtender = <T extends ElementType = "button">({
	as,
	children,
	className,
	isActive,
	...props
}: ClickExtenderProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof ClickExtenderProps<T>>) => {
	const Component = as || "button";
	return (
		<Component
			className={classNames(className, styles.extender, {
				[styles.active]: isActive
			})}
			{...props}
		>
			{children}
		</Component>
	);
};

export default ClickExtender;
