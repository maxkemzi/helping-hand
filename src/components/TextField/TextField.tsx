import React, {
	FC,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
	useId
} from "react";
import classNames from "classnames";
import {InputProps} from "@components/Input/Input";
import styles from "./TextField.module.scss";

export interface TextFieldProps extends InputProps {
	element: FC<{className?: string; required: boolean}>;
	label: string;
	isInvalid?: boolean;
	className?: string;
}

const TextField: FC<
	TextFieldProps &
		(
			| InputHTMLAttributes<HTMLInputElement>
			| TextareaHTMLAttributes<HTMLTextAreaElement>
		)
> = ({className, element: Element, label, isInvalid, ...props}) => {
	const id = useId();
	return (
		<div
			className={classNames(className, styles.item, {
				[styles.invalid]: isInvalid
			})}
		>
			<Element id={id} required className={styles.input} {...props} />
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default TextField;
