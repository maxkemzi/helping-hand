import React, {FC} from "react";
import classNames from "classnames";
import styles from "./CheckboxItem.module.scss";

interface CheckboxItemProps {
	label: string;
	value: boolean;
	name?: string;
	onChange?: (label: string) => void;
	className?: string;
	disabled?: boolean;
}

const CheckboxItem: FC<CheckboxItemProps> = ({
	label,
	className,
	value,
	onChange = () => {},
	name,
	disabled
}) => (
	<label className={classNames(className, styles.item)}>
		<input
			className={styles.checkbox}
			name={name}
			type="checkbox"
			checked={value}
			onChange={() => onChange(label)}
			disabled={disabled}
		/>
		<span className={styles.fake} />
		<span className={styles.label}>{label}</span>
	</label>
);

export default CheckboxItem;
