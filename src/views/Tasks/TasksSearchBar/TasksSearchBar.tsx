import React, {useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";

const TasksSearchBar = () => {
	const [value, setValue] = useState("");

	return <SearchBar value={value} setValue={setValue} />;
};

export default TasksSearchBar;
