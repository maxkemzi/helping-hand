import {
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
	icon: keyof JSX.IntrinsicElements;
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
	icon: Icon
}) => {
	if (Icon) {
		return (
			<div className={styles.wrapper}>
				<input
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
				/>
				<Icon className={styles.icon} />
			</div>
		);
	}

	return (
		<input
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
		/>
	);
};

export default Input;
