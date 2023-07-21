import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import {DropdownOption as IDropdownOption} from "@customTypes/components";
import React, {useState} from "react";
import styles from "./TasksSortDropdowns.module.scss";

const TasksSortDropdowns = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState({
		text: "New",
		value: "new"
	});

	const handleClose = () => setIsOpen(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	const handleClick = (option: IDropdownOption) => {
		setSortByDateValue(option);
		handleClose();
	};

	return (
		<div className={styles.list}>
			<Dropdown
				variant="big"
				isOpen={isOpen}
				onClose={handleClose}
				toggleOpen={toggleOpen}
				value={sortByDateValue.text}
			>
				<DropdownOption
					onClick={handleClick}
					isActive={sortByDateValue.value === "new"}
					text="New"
					value="new"
				/>
				<DropdownOption
					onClick={handleClick}
					isActive={sortByDateValue.value === "old"}
					text="Old"
					value="old"
				/>
			</Dropdown>
		</div>
	);
};

export default TasksSortDropdowns;
