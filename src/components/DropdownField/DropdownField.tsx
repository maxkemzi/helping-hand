import React, {FC, useRef} from "react";
import classNames from "classnames";
import {IoChevronDown} from "react-icons/io5";
import styles from "./DropdownField.module.scss";
import useListenClickOutside from "../../hooks/useListenClickOutside";

interface DropdownFieldProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	toggleOpen: () => void;
	children: React.ReactNode;
	value: string | string[];
	placeholder: string;
}

const DropdownField: FC<DropdownFieldProps> = ({
	className,
	isOpen,
	onClose,
	toggleOpen,
	children,
	value,
	placeholder
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const parsedValue = typeof value === "object" ? value.join(", ") : value;

	useListenClickOutside(ref, onClose);

	return (
		<div
			ref={ref}
			className={classNames(className, styles.dropdown, {
				[styles.open]: isOpen
			})}
		>
			<button onClick={toggleOpen} className={styles.button} type="button">
				<span className={styles.title}>{parsedValue || placeholder}</span>
				<IoChevronDown size={16} />
			</button>
			<div className={styles.list}>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default DropdownField;
