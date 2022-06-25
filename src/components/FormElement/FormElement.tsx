import React, {FC} from "react";
import {FieldProps} from "formik";
import TextField from "@components/TextField/TextField";
import classNames from "classnames";
import styles from "./FormElement.module.scss";

interface FormElementProps {
	element: FC;
	className?: string;
	label: string;
}

const FormElement: FC<FormElementProps & FieldProps> = ({
	element,
	label,
	form: {errors, touched},
	field,
	className = "",
	...props
}) => {
	const hasError = !!(touched[field.name] && errors[field.name]);

	return (
		<TextField
			element={element}
			label={label}
			id={field.name}
			className={classNames(className, styles.input)}
			isInvalid={hasError}
			{...field}
			{...props}
		/>
	);
};

export default FormElement;
