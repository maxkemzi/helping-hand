import React, {FC, useRef} from "react";
import classNames from "classnames";
import {IoChevronDown} from "react-icons/io5";
import styles from "./Dropdown.module.scss";
import useListenClickOutside from "../../hooks/useListenClickOutside";

type Size = "big" | "small";

interface DropdownProps {
	className?: string;
	variant?: Size;
	isOpen: boolean;
	onClose: () => void;
	toggleOpen: () => void;
	children: React.ReactNode;
	value: string;
}

const Dropdown: FC<DropdownProps> = ({
	className,
	onClose,
	toggleOpen,
	isOpen,
	variant = "small",
	value,
	children
}) => {
	const ref = useRef(null);

	useListenClickOutside(ref, onClose);

	return (
		<div
			ref={ref}
			className={classNames(className, styles.dropdown, styles[variant], {
				[styles.open]: isOpen
			})}
		>
			<button onClick={toggleOpen} className={styles.button} type="button">
				<span className={styles.title}>{value}</span>
				<IoChevronDown size={16} />
			</button>
			<div className={styles.list}>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default Dropdown;
