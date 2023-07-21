import React, {FC, memo, useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import {setSearchQuery} from "@store/tasks/tasks.slice";
import styles from "../TasksPage/TasksPage.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";

interface TasksSearchBarProps {
	isFetching: boolean;
	limit: number;
}

const TasksSearchBar: FC<TasksSearchBarProps> = memo(({isFetching, limit}) => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState("");

	const handleChange = (val: string) => setValue(val);

	const handleClear = () => {
		setValue("");
		dispatch(setSearchQuery(""));
		dispatch(
			TasksService.fetchAll({
				page: 1,
				limit,
				search: ""
			})
		);
	};

	const handleSearch = () => {
		dispatch(setSearchQuery(value.toLowerCase().trim()));
		dispatch(
			TasksService.fetchAll({
				page: 1,
				limit,
				search: value.toLowerCase().trim()
			})
		);
	};

	return (
		<SearchBar
			onClear={handleClear}
			isDisabled={isFetching}
			className={styles.search}
			onChange={handleChange}
			onSearch={handleSearch}
			value={value}
		/>
	);
});

export default TasksSearchBar;
