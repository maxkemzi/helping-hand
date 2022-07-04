import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import styles from "./DotItem.module.scss";

interface DotItemProps {
	className?: string;
	onClick: MouseEventHandler;
	isActive: boolean;
}

const DotItem: FC<DotItemProps> = ({onClick, className, isActive}) => (
	<button
		onClick={onClick}
		aria-label="dot"
		className={classNames(className, styles.dot, {
			[styles.active]: isActive
		})}
		type="button"
	/>
);

export default DotItem;
