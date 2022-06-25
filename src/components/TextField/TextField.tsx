import React, {FC} from "react";
import classNames from "classnames";
import styles from "./TextField.module.scss";

interface TextFieldProps {
	className?: string;
	id: string;
	element: FC<{className?: string; id: string; required: boolean}>;
	label: string;
	isInvalid?: boolean;
	required?: boolean;
}

const TextField: FC<TextFieldProps> = ({
	className,
	element: Element,
	id,
	label,
	...props
}) => (
	<div className={classNames(className, styles.item)}>
		<Element id={id} required className={styles.input} {...props} />
		<label className={styles.label} htmlFor={id}>
			{label}
		</label>
	</div>
);

export default TextField;
