import React, {FC} from "react";
import TagsField from "@components/TagsField/TagsField";
import {FieldProps} from "formik";
import Tag from "@customTypes/entities/tag";

interface FormTagsFieldProps {
	className?: string;
	tagOptions: Tag[];
}

const FormTagsField: FC<FormTagsFieldProps & FieldProps> = ({
	form: {setFieldValue},
	className,
	tagOptions,
	field
}) => {
	const handleRemoveTag = (id: string) =>
		setFieldValue(
			"tags",
			field.value.filter((tag: Tag) => tag.id !== id)
		);

	const handleAddTags = (items: Tag[]) =>
		setFieldValue("tags", [...field.value, ...items]);

	return (
		<TagsField
			className={className}
			id={field.name}
			tagOptions={tagOptions}
			tags={field.value}
			onAddTags={handleAddTags}
			onRemoveTag={handleRemoveTag}
		/>
	);
};
export default FormTagsField;
