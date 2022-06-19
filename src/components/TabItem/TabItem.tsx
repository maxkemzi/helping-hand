import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import styles from "./TabItem.module.scss";

type Variant = "horizontal" | "vertical";

interface TabItemProps {
	text: string;
	onClick: MouseEventHandler;
	isActive: boolean;
	variant?: Variant;
	className?: string;
}

const TabItem: FC<TabItemProps> = ({
	text,
	onClick,
	isActive,
	variant = "horizontal",
	className
}) => (
	<button
		onClick={onClick}
		type="button"
		className={classNames(className, styles.tab, styles[variant], {
			[styles.active]: isActive
		})}
	>
		<span>{text}</span>
	</button>
);

export default TabItem;
