import React, {FC} from "react";
import classNames from "classnames";
import {DropdownOption as IDropdownOption} from "@customTypes/components";
import styles from "./DropdownOption.module.scss";

interface DropdownOptionProps {
	id?: string;
	value: string;
	isActive?: boolean;
	onClick: (option: IDropdownOption) => void;
	text?: string;
}

const DropdownOption: FC<DropdownOptionProps> = ({
	value,
	text,
	isActive,
	onClick,
	id
}) => (
	<button
		type="button"
		className={classNames(styles.option, {[styles.active]: isActive})}
		onClick={() => onClick({value, text, id: id || value})}
	>
		{text || value}
	</button>
);

export default DropdownOption;
