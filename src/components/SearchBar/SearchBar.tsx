import React, {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {IoSearch} from "react-icons/io5";
import classNames from "classnames";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./SearchBar.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

interface SearchBarProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	className?: string;
}

const SearchBar: FC<SearchBarProps> = ({value, setValue, className}) => {
	const {width} = useWindowSize();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<form
			className={classNames(className, styles.wrapper, {
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
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
		</form>
	);
};

export default SearchBar;
