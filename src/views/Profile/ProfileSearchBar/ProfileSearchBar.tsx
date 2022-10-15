import React, {FC, memo, useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import styles from "../ProfileTasks/ProfileTasks.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";

interface ProfileSearchBarProps {
	page: number;
	limit: number;
	isFetching: boolean;
}

const ProfileSearchBar: FC<ProfileSearchBarProps> = memo(
	({page, limit, isFetching}) => {
		const dispatch = useAppDispatch();
		const [value, setValue] = useState("");

		const handleChange = (val: string) => setValue(val);

		const handleClear = () => {
			setValue("");
			dispatch(TasksService.search({page, limit, search: ""}));
		};

		const handleSearch = () => {
			dispatch(
				TasksService.search({page, limit, search: value.toLowerCase().trim()})
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
