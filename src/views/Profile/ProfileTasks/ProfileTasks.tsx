import React, {useState} from "react";
import TaskItem from "@components/TaskItem/TaskItem";
import SearchBar from "@components/SearchBar/SearchBar";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import Dropdown from "@components/Dropdown/Dropdown";
import classNames from "classnames";
import Task from "@customTypes/entities/task";
import {useTranslation} from "react-i18next";
import data from "../../../mock.json";
import styles from "./ProfileTasks.module.scss";

const ProfileTasks = () => {
	const {t} = useTranslation();
	const [value, setValue] = useState("");
	const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
	const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState(() =>
		t("sortDropdowns.date.new")
	);
	const [sortByTypeValue, setSortByTypeValue] = useState(() =>
		t("sortDropdowns.status.all")
	);

	const handleDateClose = () => setIsDateDropdownOpen(false);

	const toggleDateOpen = () => setIsDateDropdownOpen(!isDateDropdownOpen);

	const handleTypeClose = () => setIsTypeDropdownOpen(false);

	const toggleTypeOpen = () => setIsTypeDropdownOpen(!isTypeDropdownOpen);

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
							isActive={sortByDateValue === t("sortDropdowns.date.new")}
							value={t("sortDropdowns.date.new")}
						/>
						<DropdownOption
							onClick={handleSortByDateClick}
							isActive={sortByDateValue === t("sortDropdowns.date.old")}
							value={t("sortDropdowns.date.old")}
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
							isActive={sortByTypeValue === t("sortDropdowns.status.all")}
							value={t("sortDropdowns.status.all")}
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue === t("sortDropdowns.status.solved")}
							value={t("sortDropdowns.status.solved")}
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={
								sortByTypeValue === t("sortDropdowns.status.createdByMe")
							}
							value={t("sortDropdowns.status.createdByMe")}
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
