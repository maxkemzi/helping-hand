import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import React, {useState} from "react";
import mock from "../../../mock.json";
import styles from "./StatisticsFilters.module.scss";

const StatisticsFilters = () => {
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
			title="Categories"
		>
			<CheckboxItem label="All" isChecked={selectedCategories.length === 0} />
			{mock.categories.map(category => (
				<CheckboxItem
					key={category}
					label={category}
					value={category}
					isChecked={selectedCategories.includes(category)}
				/>
			))}
		</CheckboxGroup>
	);
};

export default StatisticsFilters;
