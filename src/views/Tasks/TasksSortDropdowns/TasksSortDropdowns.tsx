import React, {useState} from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import styles from "./TasksSortDropdowns.module.scss";

const TasksSortDropdowns = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState("Нові");

	const handleClose = () => setIsOpen(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	const handleClick = (itemValue: string) => {
		setSortByDateValue(itemValue);
		handleClose();
	};

	return (
		<div>
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
					isActive={sortByDateValue === "Нові"}
					value="Нові"
				/>
				<DropdownOption
					onClick={handleClick}
					isActive={sortByDateValue === "Старі"}
					value="Старі"
				/>
			</Dropdown>
		</div>
	);
};

export default TasksSortDropdowns;
