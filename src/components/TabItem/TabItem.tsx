import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import styles from "./TabItem.module.scss";

type Variant = "horizontal" | "vertical";

interface TabItemProps {
	text: string;
	onClick?: MouseEventHandler;
	variant?: Variant;
	className?: string;
	isActive: boolean;
}

const TabItem: FC<TabItemProps> = ({
	text,
	onClick,
	variant = "horizontal",
	className,
	isActive
}) => (
	<button
		type="button"
		onClick={onClick}
		className={classNames(className, styles.tab, styles[variant], {
			[styles.active]: isActive
		})}
	>
		<span>{text}</span>
	</button>
);

export default TabItem;
