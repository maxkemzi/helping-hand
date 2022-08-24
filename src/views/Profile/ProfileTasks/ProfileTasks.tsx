import React, {useState} from "react";
import TaskItem from "@components/TaskItem/TaskItem";
import SearchBar from "@components/SearchBar/SearchBar";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import Dropdown from "@components/Dropdown/Dropdown";
import classNames from "classnames";
import Task from "@customTypes/entities/task";
import data from "../../../mock.json";
import styles from "./ProfileTasks.module.scss";

const ProfileTasks = () => {
	const [value, setValue] = useState("");
	const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
	const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState("Нові");
	const [sortByTypeValue, setSortByTypeValue] = useState("Усі");

	const handleDateClose = () => setIsDateDropdownOpen(false);

	const toggleDateOpen = () => setIsDateDropdownOpen(!isDateDropdownOpen);

	const handleTypeClose = () => setIsTypeDropdownOpen(false);

	const toggleTypeOpen = () => setIsDateDropdownOpen(!isTypeDropdownOpen);

	const handleSortByDateClick = (itemValue: string) => {
		setSortByDateValue(itemValue);
		handleDateClose();
	};

	const handleSortByTypeClick = (itemValue: string) => {
		setSortByTypeValue(itemValue);
		handleTypeClose();
	};

	return (
		<div>
			<div className={styles.header}>
				<SearchBar value={value} setValue={setValue} />
				<div className={styles.sorts}>
					<Dropdown
						variant="big"
						className={styles.dropdown}
						isOpen={isDateDropdownOpen}
						onClose={handleDateClose}
						toggleOpen={toggleDateOpen}
						value={sortByDateValue}
					>
						<DropdownOption
							onClick={handleSortByDateClick}
							isActive={sortByDateValue === "Нові"}
							value="Нові"
						/>
						<DropdownOption
							onClick={handleSortByDateClick}
							isActive={sortByDateValue === "Старі"}
							value="Старі"
						/>
					</Dropdown>

					<Dropdown
						variant="big"
						className={styles.dropdown}
						isOpen={isTypeDropdownOpen}
						onClose={handleTypeClose}
						toggleOpen={toggleTypeOpen}
						value={sortByTypeValue}
					>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue === "Усі"}
							value="Усі"
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue === "Вирішені"}
							value="Вирішені"
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue === "Створені"}
							value="Створені"
						/>
					</Dropdown>
				</div>
			</div>
			<div className={classNames("wrapper", styles.items)}>
				{data.tasks.map((task: Task) => (
					<TaskItem key={task.id} {...task} />
				))}
			</div>
		</div>
	);
};

export default ProfileTasks;
