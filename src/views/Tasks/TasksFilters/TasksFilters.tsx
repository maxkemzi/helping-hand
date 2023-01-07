import React, {useMemo, useState} from "react";
import CheckboxItem from "@components/CheckboxItem/CheckboxItem";
import CheckboxGroup from "@components/CheckboxGroup/CheckboxGroup";
import {getTags} from "@store/tags/tags.selectors";
import styles from "./TasksFilters.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const TasksFilters = () => {
	const tags = useAppSelector(getTags);
	const courses = useMemo(() => tags.courses, [tags.courses]);
	const [selectedCourses, setSelectedCourses] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedSubjects, setSelectedSubjects] = useState([]);

	const handleCoursesChange = (value: string) => {
		if (value) {
			if (selectedCourses.includes(value)) {
				setSelectedCourses(selectedCourses.filter(c => c !== value));
			} else {
				setSelectedCourses([...selectedCourses, value]);
			}
		} else {
			setSelectedCourses([]);
		}
	};

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

	const handleSubjectsChange = (value: string) => {
		if (value) {
			if (selectedSubjects.includes(value)) {
				setSelectedSubjects(selectedSubjects.filter(c => c !== value));
			} else {
				setSelectedSubjects([...selectedSubjects, value]);
			}
		} else {
			setSelectedSubjects([]);
		}
	};

	return (
		<>
			<CheckboxGroup
				isOpenByDefault
				onChange={handleCoursesChange}
				name="courses"
				className={styles.checkbox}
				title="Курси"
			>
				<CheckboxItem label="Усі" isChecked={selectedCourses.length === 0} />
				{courses.map(course => (
					<CheckboxItem
						key={course.uuid}
						label={course.text}
						value={course.uuid}
						isChecked={selectedCourses.includes(course.uuid)}
					/>
				))}
			</CheckboxGroup>
			<CheckboxGroup
				isOpenByDefault
				onChange={handleCategoriesChange}
				name="categories"
				className={styles.checkbox}
				title="Категорії"
			>
				<CheckboxItem label="Усі" isChecked={selectedCategories.length === 0} />
				{tags.general_categories.map(category => (
					<CheckboxItem
						key={category.uuid}
						label={category.text}
						value={category.uuid}
						isChecked={selectedCategories.includes(category.uuid)}
					/>
				))}
			</CheckboxGroup>
			<CheckboxGroup
				isOpenByDefault
				onChange={handleSubjectsChange}
				name="subjects"
				className={styles.checkbox}
				title="Предмети"
			>
				<CheckboxItem label="Усі" isChecked={selectedSubjects.length === 0} />
				{tags.subjects.map(subject => (
					<CheckboxItem
						key={subject.uuid}
						label={subject.text}
						value={subject.uuid}
						isChecked={selectedSubjects.includes(subject.uuid)}
					/>
				))}
			</CheckboxGroup>
		</>
	);
};

export default TasksFilters;
