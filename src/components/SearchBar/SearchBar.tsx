import React, {FC, FormEvent, KeyboardEvent} from "react";
import {IoClose, IoSearch} from "react-icons/io5";
import classNames from "classnames";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
	value: string;
	onSearch?: () => void;
	onChange?: (value: string) => void;
	className?: string;
	isDisabled?: boolean;
	onClear?: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
	value,
	onSearch,
	onChange,
	onClear,
	className,
	isDisabled
}) => {
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter" && !isDisabled) {
			onSearch?.();
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSearch?.();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(className, styles.wrapper)}
			noValidate
		>
			<div className={styles["input-wrapper"]}>
				<input
					placeholder="Search"
					value={value}
					onKeyDown={handleKeyDown}
					onChange={e => onChange?.(e.target.value)}
					className={styles.input}
					type="text"
					required
				/>
				<button
					onClick={onClear}
					disabled={isDisabled}
					className={classNames(styles["clear-button"], {
						[styles.visible]: value.length !== 0
					})}
					type="button"
				>
					<IoClose className={styles["clear-icon"]} size={18} />
				</button>
			</div>
			<button
				disabled={isDisabled}
				type="submit"
				className={styles["icon-wrapper"]}
			>
				<IoSearch className={styles.icon} size={18} />
			</button>
		</form>
	);
};

export default SearchBar;
