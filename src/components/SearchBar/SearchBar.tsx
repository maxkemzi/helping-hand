import React, {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import SearchIcon from "@icons/SearchIcon/SearchIcon";
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
				<SearchIcon width={16} height={16} />
			</div>
		</form>
	);
};

export default SearchBar;
