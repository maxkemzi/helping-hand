import React, {FC, useState} from "react";
import {FieldProps} from "formik";
import DropdownField from "@components/DropdownField/DropdownField";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import {DropdownOption as IDropdownOption} from "../../types/components";

interface FormDropdownFieldProps {
	className?: string;
	options: IDropdownOption[];
	placeholder: string;
}

const FormDropdownField: FC<FormDropdownFieldProps & FieldProps> = ({
	form: {setFieldValue},
	className,
	options,
	placeholder,
	field
}) => {
	const [dropdownValue, setDropdownValue] = useState<IDropdownOption[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const toggleOpen = () => setIsOpen(prev => !prev);

	const handleSelect = (option: IDropdownOption) => {
		if (dropdownValue.some(item => item.id === option.id)) {
			setDropdownValue([]);
			setFieldValue(field.name, []);
		} else {
			setDropdownValue([option]);
			setFieldValue(field.name, [option.value]);
		}
		handleClose();
	};

	return (
		<DropdownField
			className={className}
			isOpen={isOpen}
			onClose={handleClose}
			toggleOpen={toggleOpen}
			value={dropdownValue[0]?.text}
			placeholder={placeholder}
		>
			{options.map(option => (
				<DropdownOption
					key={option.id}
					value={option.value}
					id={option.id}
					onClick={handleSelect}
					text={option.text}
					isActive={dropdownValue.some(item => item.id === option.id)}
				/>
			))}
		</DropdownField>
	);
};

export default FormDropdownField;
