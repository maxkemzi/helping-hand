import React, {
	ChangeEventHandler,
	FC,
	FocusEventHandler,
	KeyboardEventHandler
} from "react";
import classNames from "classnames";
import styles from "./Textarea.module.scss";

interface TextareaProps {
	className?: "";
	value: string;
	name: string;
	placeholder: string;
	onChange?: ChangeEventHandler;
	onBlur?: FocusEventHandler;
	onKeyDown?: KeyboardEventHandler;
	isInvalid: boolean;
	required?: boolean;
	id?: string;
	rows?: number;
}

const Textarea: FC<TextareaProps> = ({
	className,
	value,
	name,
	placeholder,
	onChange,
	onBlur,
	onKeyDown,
	isInvalid,
	required,
	id,
	rows
}) => (
	<textarea
		id={id}
		className={classNames(className, styles.textarea, {
			[styles.invalid]: isInvalid
		})}
		rows={rows || 4}
		name={name}
		placeholder={placeholder}
		onChange={onChange}
		onBlur={onBlur}
		onKeyDown={onKeyDown}
		required={required}
	>
		{value}
	</textarea>
);

export default Textarea;
