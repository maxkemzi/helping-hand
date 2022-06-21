import React, {FC} from "react";
import {FieldProps} from "formik";
import classNames from "classnames";
import styles from "./FormElement.module.scss";

interface FormElementProps {
	element: FC<{
		isInvalid: boolean;
		className: string;
		required: boolean;
		id: string;
	}>;
	className?: string;
	label: string;
}

const FormElement: FC<FormElementProps & FieldProps> = ({
	element: Element,
	label,
	form: {errors, touched},
	field,
	className = "",
	...props
}) => {
	const hasError = !!(touched[field.name] && errors[field.name]);

	return (
		<div className={classNames(className, styles.item)}>
			<Element
				id={field.name}
				className={styles.input}
				isInvalid={hasError}
				required
				{...field}
				{...props}
			/>
			<label className={styles.label} htmlFor={field.name}>
				{label}
			</label>
		</div>
	);
};

export default FormElement;
