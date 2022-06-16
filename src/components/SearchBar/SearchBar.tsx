import React, {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {ReactComponent as SearchIcon} from "@images/search.svg";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<SearchBarProps> = ({value, setValue}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<form className={styles.wrapper}>
			<input
				placeholder="Пошук"
				value={value}
				onChange={handleChange}
				className={styles.input}
				type="text"
				required
			/>
			<div className={styles.icon}>
				<SearchIcon />
			</div>
		</form>
	);
};

export default SearchBar;
