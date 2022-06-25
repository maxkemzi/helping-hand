import React, {FC, TextareaHTMLAttributes} from "react";
import classNames from "classnames";
import {InputProps} from "@components/Input/Input";
import styles from "./Textarea.module.scss";

const Textarea: FC<
	InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({className, isInvalid, ...props}) => (
	<textarea
		className={classNames(className, styles.textarea, {
			[styles.invalid]: isInvalid
		})}
		{...props}
	/>
);

export default Textarea;
