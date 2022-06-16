import React, {FC} from "react";
import classNames from "classnames";
import {ReactComponent as ArrowDownIcon} from "@images/arrow-down.svg";
import styles from "./Dropdown.module.scss";

type Size = "big" | "small";

interface DropdownProps {
	className?: string;
	variant?: Size;
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
	children: React.ReactNode;
	value: string;
}

const Dropdown: FC<DropdownProps> = ({
	className,
	setIsVisible,
	isVisible,
	variant = "small",
	value,
	children
}) => (
	<div
		className={classNames(className, styles.dropdown, styles[variant], {
			[styles.visible]: isVisible
		})}
		onMouseEnter={() => setIsVisible(true)}
		onMouseLeave={() => setIsVisible(false)}
	>
		<button className={styles.button} type="button">
			<span className={styles.title}>{value}</span>
			<ArrowDownIcon />
		</button>
		<div className={styles.list}>
			<div className={styles.content}>{children}</div>
		</div>
	</div>
);

export default Dropdown;
