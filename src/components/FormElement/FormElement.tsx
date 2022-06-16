import React, {ComponentType, FC} from "react";
import {FieldProps} from "formik";
import styles from "./FormElement.module.scss";

interface FormElementProps {
	element: keyof JSX.IntrinsicElements &
		ComponentType<{
			isInvalid: boolean;
			className: string;
			icon: keyof JSX.IntrinsicElements;
		}>;
	icon: keyof JSX.IntrinsicElements;
	className?: string;
	label: string;
}

const FormElement: FC<FormElementProps & FieldProps> = ({
	element: Element,
	label,
	icon,
	form: {errors, touched},
	field,
	className = "",
	...props
}) => {
	const hasError = !!(touched[field.name] && errors[field.name]);

	return (
		<div className={className}>
			<label className={styles.label} htmlFor={field.name}>
				{label}
			</label>
			<Element
				className={styles.input}
				isInvalid={hasError}
				icon={icon}
				{...field}
				{...props}
			/>
		</div>
	);
};

export default FormElement;
