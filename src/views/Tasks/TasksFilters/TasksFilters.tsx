import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import {getTasksLimit} from "@store/tasks/tasks.selectors";
import React, {useEffect, useState} from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import mock from "../../../mock.json";
import TasksService from "../../../services/tasks/tasks.service";
import styles from "./TasksFilters.module.scss";

const TasksFilters = () => {
	const dispatch = useAppDispatch();
	const limit = useAppSelector(getTasksLimit);
	const [selectedCategories, setSelectedCategories] = useState([]);

	useEffect(() => {
		dispatch(TasksService.fetchAll({page: 1, limit, tags: selectedCategories}));
	}, [dispatch, limit, selectedCategories]);

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

export default TasksFilters;
