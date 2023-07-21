import SearchBar from "@components/SearchBar/SearchBar";
import {setSearchQuery} from "@store/tasks/tasks.slice";
import React, {FC, memo, useState} from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import styles from "../StatisticsPage/StatisticsPage.module.scss";

interface StatisticsSearchBarProps {
	isFetching: boolean;
}

const StatisticsSearchBar: FC<StatisticsSearchBarProps> = memo(
	({isFetching}) => {
		const dispatch = useAppDispatch();
		const [value, setValue] = useState("");

		const handleChange = (val: string) => setValue(val);

		const handleClear = () => {
			setValue("");
			dispatch(setSearchQuery(""));
		};

		const handleSearch = () => {
			dispatch(setSearchQuery(value.toLowerCase().trim()));
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
	}
);

export default StatisticsSearchBar;
