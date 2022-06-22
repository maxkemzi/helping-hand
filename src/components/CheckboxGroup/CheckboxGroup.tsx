import React, {FC, ReactNode, useState} from "react";
import classNames from "classnames";
import ArrowDownIcon from "@images/arrow-down.svg";
import Typography from "@components/Typography/Typography";
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
		<div className={classNames(className, styles.item)}>
			<button onClick={handleClick} className={styles.btn} type="button">
				<Typography variant="h5" component="span">
					{title}
				</Typography>
				<ArrowDownIcon
					className={classNames(styles.icon, {[styles.up]: isOpen})}
				/>
			</button>
			{isOpen && (
				<div className={styles.list}>
					{React.Children.map(children, child => {
						if (React.isValidElement(child)) {
							return React.cloneElement(child, {name, onChange});
						}
						return false;
					})}
				</div>
			)}
		</div>
	);
};

export default CheckboxGroup;
