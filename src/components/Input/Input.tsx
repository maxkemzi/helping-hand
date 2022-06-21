import React, {
	ChangeEventHandler,
	FC,
	FocusEventHandler,
	HTMLInputTypeAttribute,
	KeyboardEventHandler
} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

interface InputProps {
	className?: "";
	type?: HTMLInputTypeAttribute;
	value: string;
	name: string;
	placeholder: string;
	onChange?: ChangeEventHandler;
	onBlur?: FocusEventHandler;
	onKeyDown?: KeyboardEventHandler;
	isInvalid: boolean;
	required?: boolean;
	id?: string;
}

const Input: FC<InputProps> = ({
	className,
	type = "text",
	value,
	name,
	placeholder,
	onChange,
	onBlur,
	onKeyDown,
	isInvalid,
	required,
	id
}) => (
	<input
		id={id}
		className={classNames(className, styles.input, {
			[styles.invalid]: isInvalid
		})}
		type={type}
		value={value}
		name={name}
		placeholder={placeholder}
		onChange={onChange}
		onBlur={onBlur}
		onKeyDown={onKeyDown}
		required={required}
	/>
);

export default Input;
