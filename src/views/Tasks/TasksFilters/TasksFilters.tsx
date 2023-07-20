import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import React, {useState} from "react";
import mock from "../../../mock.json";
import styles from "./TasksFilters.module.scss";

const TasksFilters = () => {
	const [selectedCategories, setSelectedCategories] = useState([]);

	const handleCategoriesChange = (value: string) => {
		if (value) {
			if (selectedCategories.includes(value)) {
				setSelectedCategories(selectedCategories.filter(c => c !== value));
			} else {
				setSelectedCategories([...selectedCategories, value]);
			}
		} else {
			setSelectedCategories([]);
		}
	};

	return (
		<CheckboxGroup
			isOpenByDefault
			onChange={handleCategoriesChange}
			name="categories"
			className={styles.checkbox}
			title="Категорії"
		>
			<CheckboxItem label="Усі" isChecked={selectedCategories.length === 0} />
			{mock.tags.map(category => (
				<CheckboxItem
					key={category.text}
					label={category.text}
					value={category.text}
					isChecked={selectedCategories.includes(category.text)}
				/>
			))}
		</CheckboxGroup>
	);
};

export default TasksFilters;
