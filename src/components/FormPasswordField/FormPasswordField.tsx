import React, {FC, useState} from "react";
import {FieldProps} from "formik";
import TextField, {TextFieldProps} from "@components/TextField/TextField";
import {IoEye, IoEyeOff} from "react-icons/io5";
import styles from "./FormPasswordField.module.scss";

const FormPasswordField: FC<TextFieldProps & FieldProps> = ({
	form: {errors, touched},
	field,
	className,
	...props
}) => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const hasError = !!(touched[field.name] && errors[field.name]);

	const togglePasswordVisibility = () => setPasswordIsVisible(prev => !prev);

	return (
		<div className={className}>
			<div className={styles.field}>
				<TextField
					inputClassName={styles.input}
					isInvalid={hasError}
					type={passwordIsVisible ? "text" : "password"}
					{...field}
					{...props}
				/>
				<button
					onClick={togglePasswordVisibility}
					className={styles.button}
					type="button"
				>
					{passwordIsVisible ? (
						<IoEye className={styles.icon} size={20} />
					) : (
						<IoEyeOff className={styles.icon} size={20} />
					)}
				</button>
			</div>
			{hasError && (
				<p className={styles.label}>{errors[field.name] as string}</p>
			)}
		</div>
	);
};

export default FormPasswordField;
