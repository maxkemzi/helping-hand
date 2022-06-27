import React, {useState} from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import styles from "./TasksSortDropdowns.module.scss";

const TasksSortDropdowns = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState("Нові");

	const handleClick = (itemValue: string) => {
		setSortByDateValue(itemValue);
		setIsVisible(false);
	};

	return (
		<div>
			<Dropdown
				variant="big"
				className={styles.dropdown}
				isVisible={isVisible}
				setIsVisible={setIsVisible}
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
