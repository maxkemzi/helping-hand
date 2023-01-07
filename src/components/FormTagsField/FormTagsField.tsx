import React, {FC, useState} from "react";
import DropdownField from "@components/DropdownField/DropdownField";
import {FieldProps} from "formik";
import TagItem from "@components/TagItem/TagItem";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import styles from "./FormTagsField.module.scss";
import {DropdownOption as IDropdownOption} from "../../types/components";

interface FormTagsFieldProps {
	className?: string;
	options: IDropdownOption[];
	placeholder: string;
}

const FormTagsField: FC<FormTagsFieldProps & FieldProps> = ({
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

	const handleRemove = (id: string, value: string) => {
		setDropdownValue(prev => prev.filter(option => option.id !== id));
		setFieldValue(
			"tags",
			field.value.filter((tag: string) => tag !== value)
		);
	};

	const handleClick = (option: IDropdownOption) => {
		if (dropdownValue.some(item => item.id === option.id)) {
			handleRemove(option.id, option.value);
		} else {
			setDropdownValue(prev => [...prev, option]);
			setFieldValue("tags", [...field.value, option.value]);
		}
	};

	return (
		<>
			{dropdownValue.length !== 0 && (
				<div className={styles.tags}>
					{dropdownValue.map(val => (
						<div key={val.id} className={styles.tag}>
							<TagItem
								text={val.text}
								hasRemoveBtn
								onRemoveBtnClick={() => handleRemove(val.id, val.value)}
							/>
						</div>
					))}
				</div>
			)}
			<DropdownField
				placeholder={placeholder}
				isOpen={isOpen}
				onClose={handleClose}
				toggleOpen={toggleOpen}
				className={className}
				value={dropdownValue.map(val => val.text)}
			>
				{options.map(option => (
					<DropdownOption
						key={option.id}
						id={option.id}
						text={option.text}
						value={option.value}
						onClick={handleClick}
						isActive={dropdownValue.some(item => item.id === option.id)}
					/>
				))}
			</DropdownField>
		</>
	);
};
export default FormTagsField;
