import React, {FC, memo, useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import {setSearchQuery} from "@store/tasks/tasks.slice";
import styles from "../ProfileTasks/ProfileTasks.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";

interface ProfileSearchBarProps {
	limit: number;
	isFetching: boolean;
}

const ProfileSearchBar: FC<ProfileSearchBarProps> = memo(
	({limit, isFetching}) => {
		const dispatch = useAppDispatch();
		const [value, setValue] = useState("");

		const handleChange = (val: string) => setValue(val);

		const handleClear = () => {
			dispatch(setSearchQuery(""));
			setValue("");
			dispatch(TasksService.search({page: 1, limit, search: ""}));
		};

		const handleSearch = () => {
			dispatch(setSearchQuery(value.toLowerCase().trim()));
			dispatch(
				TasksService.search({
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
	}
);

export default ProfileSearchBar;
