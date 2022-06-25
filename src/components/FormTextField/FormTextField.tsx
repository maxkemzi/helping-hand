import React, {FC} from "react";
import {FieldProps} from "formik";
import TextField, {TextFieldProps} from "@components/TextField/TextField";

const FormTextField: FC<TextFieldProps & FieldProps> = ({
	form: {errors, touched},
	field,
	...props
}) => {
	const hasError = !!(touched[field.name] && errors[field.name]);

	return (
		<TextField id={field.name} isInvalid={hasError} {...field} {...props} />
	);
};

export default FormTextField;
