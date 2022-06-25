import React, {FC} from "react";
import {ITag} from "@customTypes/index";
import TagsField from "@components/TagsField/TagsField";
import {FieldProps} from "formik";

interface FormTagsFieldProps {
	className?: string;
	tagOptions: ITag[];
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
			field.value.filter((tag: ITag) => tag.id !== id)
		);

	const handleAddTags = (items: ITag[]) =>
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
