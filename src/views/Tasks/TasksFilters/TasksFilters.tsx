import React, {useState} from "react";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import styles from "./TasksFilters.module.scss";

const TasksFilters = () => {
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
				title="Курси"
			>
				<CheckboxItem label="Усі" value={course.includes("Усі")} />
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
				title="Категорії"
			>
				<CheckboxItem label="Усі" value={category.includes("Усі")} />
				<CheckboxItem
					label="Програмування"
					value={category.includes("Програмування")}
				/>
				<CheckboxItem label="Дизайн" value={category.includes("Дизайн")} />
			</CheckboxGroup>
		</>
	);
};

export default TasksFilters;
