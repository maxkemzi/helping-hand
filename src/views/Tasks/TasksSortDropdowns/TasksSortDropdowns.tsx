import React, {useState} from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import {useTranslation} from "react-i18next";
import styles from "./TasksSortDropdowns.module.scss";

const TasksSortDropdowns = () => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState(() =>
		t("sortDropdowns.date.new")
	);

	const handleClose = () => setIsOpen(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	const handleClick = (itemValue: string) => {
		setSortByDateValue(itemValue);
		handleClose();
	};

	return (
		<div className={styles.list}>
			<Dropdown
				variant="big"
				className={styles.dropdown}
				isOpen={isOpen}
				onClose={handleClose}
				toggleOpen={toggleOpen}
				value={sortByDateValue}
			>
				<DropdownOption
					onClick={handleClick}
					isActive={sortByDateValue === t("sortDropdowns.date.new")}
					value={t("sortDropdowns.date.new")}
				/>
				<DropdownOption
					onClick={handleClick}
					isActive={sortByDateValue === t("sortDropdowns.date.old")}
					value={t("sortDropdowns.date.old")}
				/>
			</Dropdown>
		</div>
	);
};

export default TasksSortDropdowns;
