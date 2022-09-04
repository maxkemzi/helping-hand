import React, {useState} from "react";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import {useTranslation} from "react-i18next";
import styles from "./TasksFilters.module.scss";

const TasksFilters = () => {
	const {t} = useTranslation();
	const [course, setCourse] = useState(["Усі"]);
	const [category, setCategory] = useState(["Усі"]);

	return (
		<>
			<CheckboxGroup
				isOpenByDefault
				onChange={(value: string) => {
					if (course.includes(value)) {
						setCourse(course.filter(c => c !== value));
					} else {
						setCourse([...course, value]);
					}
				}}
				name="courses"
				className={styles.checkbox}
				title={t("tasks.filters.courses.name")}
			>
				<CheckboxItem
					label={t("tasks.filters.allValue")}
					value={course.includes("Усі")}
				/>
				<CheckboxItem label="1" value={course.includes("1")} />
				<CheckboxItem label="2" value={course.includes("2")} />
				<CheckboxItem label="3" value={course.includes("3")} />
			</CheckboxGroup>
			<CheckboxGroup
				onChange={(value: string) => {
					if (category.includes(value)) {
						setCategory(category.filter(c => c !== value));
					} else {
						setCategory([...category, value]);
					}
				}}
				name="category"
				className={styles.checkbox}
				title={t("tasks.filters.categories.name")}
			>
				<CheckboxItem
					label={t("tasks.filters.allValue")}
					value={category.includes(t("tasks.filters.allValue"))}
				/>
				<CheckboxItem
					label={t("tasks.filters.categories.values.programming")}
					value={category.includes(
						t("tasks.filters.categories.values.programming")
					)}
				/>
				<CheckboxItem
					label={t("tasks.filters.categories.values.design")}
					value={category.includes(t("tasks.filters.categories.values.design"))}
				/>
			</CheckboxGroup>
		</>
	);
};

export default TasksFilters;
