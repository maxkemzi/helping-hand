import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import {Link, useLocation} from "react-router-dom";
import styles from "./TabItem.module.scss";

type Variant = "horizontal" | "vertical";

interface TabItemProps {
	text: string;
	onClick?: MouseEventHandler;
	variant?: Variant;
	className?: string;
	to: string;
}

const TabItem: FC<TabItemProps> = ({
	text,
	onClick,
	variant = "horizontal",
	className,
	to
}) => {
	const location = useLocation();
	const isActive = location.pathname === to;

	return (
		<Link
			to={to}
			onClick={onClick}
			className={classNames(className, styles.tab, styles[variant], {
				[styles.active]: isActive
			})}
		>
			<span>{text}</span>
		</Link>
	);
};

export default TabItem;
