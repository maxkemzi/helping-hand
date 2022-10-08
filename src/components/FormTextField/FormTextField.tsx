import React, {FC} from "react";
import {FieldProps} from "formik";
import TextField, {TextFieldProps} from "@components/TextField/TextField";
import styles from "./FormTextField.module.scss";

const FormTextField: FC<TextFieldProps & FieldProps> = ({
	form: {errors, touched},
	field,
	className,
	...props
}) => {
	const hasError = !!(touched[field.name] && errors[field.name]);

	return (
		<div className={className}>
			<TextField isInvalid={hasError} {...field} {...props} />
			{hasError && (
				<p className={styles.label}>{errors[field.name] as string}</p>
			)}
		</div>
	);
};

export default FormTextField;
