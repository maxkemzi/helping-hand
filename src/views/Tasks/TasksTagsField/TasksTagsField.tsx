import React, {ChangeEvent, FC, useRef, useState} from "react";
import classNames from "classnames";
import {ITag} from "@customTypes/index";
import TagItem from "@components/TagItem/TagItem";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import DropdownOption from "@components/Dropdown/DropdownOption/DropdownOption";
import styles from "./TasksTagsField.module.scss";
import mockData from "../../../mock.json";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

interface TasksTagsFieldProps {
	className?: string;
	tags: ITag[];
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const TasksTagsField: FC<TasksTagsFieldProps> = ({
	className,
	tags,
	setFieldValue
}) => {
	const [value, setValue] = useState("");
	const [myTags, setMyTags] = useState<ITag[]>([]);
	const [isVisible, setIsVisible] = useState(false);
	const listRef = useRef<HTMLDivElement>(null);

	useListenClickOutside(listRef, () => setIsVisible(false));

	const removeTag = (id: string) =>
		setFieldValue(
			"tags",
			tags.filter(item => item.id !== id)
		);

	const handleChange = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setValue(target.value);
	};

	return (
		<div className={classNames(className, styles.field)}>
			{tags.length !== 0 && (
				<div className={styles.tags}>
					{tags.map((tag: ITag) => (
						<div className={styles.tag}>
							<TagItem
								text={tag.text}
								hasRemoveBtn
								onRemoveBtnClick={() => removeTag(tag.id)}
							/>
						</div>
					))}
				</div>
			)}
			<div className={styles.inner}>
				<div ref={listRef}>
					<Input
						onChange={handleChange}
						onFocus={() => setIsVisible(true)}
						className={styles.input}
						value={value}
						name="search"
						placeholder="Теги"
					/>
					<Button
						className={styles.btn}
						variant="outline"
						size="small"
						text="Додати"
					/>
					<div
						className={classNames(styles.list, {
							[styles.visible]: isVisible
						})}
					>
						<div className={styles.content}>
							{mockData.tags
								.filter(category => category.text.includes(value))
								.map(item => (
									<DropdownOption
										isActive={tags.some(tag => tag.id === item.id)}
										value={item.text}
										onClick={() => setMyTags([...myTags, item])}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TasksTagsField;
