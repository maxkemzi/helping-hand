import React, {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {IoSearch} from "react-icons/io5";
import classNames from "classnames";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	className?: string;
}

const SearchBar: FC<SearchBarProps> = ({value, setValue, className}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<div className={classNames(className, styles.wrapper)}>
			<input
				placeholder="Пошук"
				value={value}
				onChange={handleChange}
				className={styles.input}
				type="text"
				required
			/>
			<div className={styles["icon-wrapper"]}>
				<IoSearch className={styles.icon} size={18} />
			</div>
		</div>
	);
};

export default SearchBar;
