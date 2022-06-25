import React, {FC, InputHTMLAttributes} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export interface InputProps {
	isInvalid?: boolean;
}

const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
	className,
	isInvalid,
	...props
}) => (
	<input
		className={classNames(className, styles.input, {
			[styles.invalid]: isInvalid
		})}
		{...props}
	/>
);

export default Input;
