import React, {FC} from "react";
import classNames from "classnames";
import styles from "./DropdownOption.module.scss";

interface DropdownOptionProps {
	value: string;
	isActive?: boolean;
	onClick: (value: string) => void;
}

const DropdownOption: FC<DropdownOptionProps> = ({
	value,
	isActive,
	onClick
}) => (
	<button
		type="button"
		className={classNames(styles.option, {[styles.active]: isActive})}
		onClick={() => onClick(value)}
		disabled={isActive}
	>
		{value}
	</button>
);

export default DropdownOption;
