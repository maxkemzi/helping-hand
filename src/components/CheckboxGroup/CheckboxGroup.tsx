import React, {FC, ReactNode, useState} from "react";
import classNames from "classnames";
import ArrowDownIcon from "@images/arrow-down.svg";
import styles from "./CheckboxGroup.module.scss";

interface CheckboxGroupProps {
	title: string;
	name: string;
	className?: string;
	children: ReactNode;
	onChange?: (value: string) => void;
	isOpenByDefault?: boolean;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
	title,
	name,
	className,
	children,
	onChange,
	isOpenByDefault
}) => {
	const [isOpen, setIsOpen] = useState(isOpenByDefault);

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div
			className={classNames(className, styles.item, {[styles.open]: isOpen})}
		>
			<button onClick={handleClick} className={styles.btn} type="button">
				<span>{title}</span>
				<ArrowDownIcon className={styles.icon} />
			</button>
			<div className={styles.content}>
				<div className={styles.list}>
					{React.Children.map(children, child => {
						if (React.isValidElement(child)) {
							return React.cloneElement(child, {name, onChange});
						}
						return false;
					})}
				</div>
			</div>
		</div>
	);
};

export default CheckboxGroup;
