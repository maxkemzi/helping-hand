import React, {useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import styles from "../TasksPage/TasksPage.module.scss";

const TasksSearchBar = () => {
	const [value, setValue] = useState("");

	return (
		<SearchBar className={styles.search} value={value} setValue={setValue} />
	);
};

export default TasksSearchBar;
