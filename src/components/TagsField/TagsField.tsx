import React, {ChangeEvent, FC, useRef, useState} from "react";
import {ITag} from "@customTypes/index";
import classNames from "classnames";
import TagItem from "@components/TagItem/TagItem";
import TextField from "@components/TextField/TextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import styles from "./TagsField.module.scss";
import useListenClickOutside from "../../hooks/useListenClickOutside";

interface TagsFieldProps {
	className?: string;
	tags: ITag[];
	tagOptions: ITag[];
	onRemoveTag: (id: string) => void;
	onAddTags: (items: ITag[]) => void;
	id: string;
}

const TagsField: FC<TagsFieldProps> = ({
	className,
	tags,
	tagOptions,
	onRemoveTag,
	onAddTags,
	id
}) => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
	const [isListVisible, setIsListVisible] = useState(false);
	const fieldRef = useRef<HTMLDivElement>(null);

	useListenClickOutside(fieldRef, () => setIsListVisible(false));

	const addTags = (items: ITag[]) => {
		onAddTags(items);
		setSelectedTags([]);
		setIsListVisible(false);
		setSearchValue("");
	};

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchValue(e.target.value);

	const handleSearchFocus = () => setIsListVisible(true);

	return (
		<div className={className}>
			{tags.length !== 0 && (
				<div className={styles.tags}>
					{tags.map(tag => (
						<div key={tag.id} className={styles.tag}>
							<TagItem
								text={tag.text}
								hasRemoveBtn
								onRemoveBtnClick={() => onRemoveTag(tag.id)}
							/>
						</div>
					))}
				</div>
			)}
			<div ref={fieldRef} className={styles.field}>
				<div className={styles.inner}>
					<TextField
						id={id}
						onChange={handleSearchChange}
						onFocus={handleSearchFocus}
						className={styles.input}
						element={Input}
						value={searchValue}
						label="Теги"
					/>
					<Button
						className={styles.btn}
						text="Додати"
						onClick={() => addTags(selectedTags)}
						disabled={selectedTags.length === 0}
					/>
				</div>

				<div
					className={classNames(styles.list, {
						[styles.visible]: isListVisible
					})}
				>
					<div className={styles.content}>
						{tagOptions
							.filter(item => item.text.includes(searchValue))
							.map(tag => (
								<DropdownOption
									key={tag.id}
									isActive={
										tags.some(item => tag.id === item.id) ||
										selectedTags.some(item => tag.id === item.id)
									}
									value={tag.text}
									onClick={() => setSelectedTags([...selectedTags, tag])}
								/>
							))}
						{tagOptions.filter(item => item.text.includes(searchValue))
							.length === 0 && "Нічого не знайдено"}
						{tagOptions.length === 0 && "Порожньо"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TagsField;
