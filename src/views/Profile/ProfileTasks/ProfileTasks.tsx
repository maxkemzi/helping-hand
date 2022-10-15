import React, {useState} from "react";
import TaskItem from "@components/TaskItem/TaskItem";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import Dropdown from "@components/Dropdown/Dropdown";
import classNames from "classnames";
import Task from "@customTypes/entities/task";
import ScreenSizes from "@utils/constants/screenSizes";
import ProfileSearchBar from "@views/Profile/ProfileSearchBar/ProfileSearchBar";
import {
	getIsTasksFetching,
	getTasksLimit,
	getTasksPage
} from "@store/tasks/tasks.selectors";
import data from "../../../mock.json";
import styles from "./ProfileTasks.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppSelector from "../../../hooks/useAppSelector";

const ProfileTasks = () => {
	const isFetching = useAppSelector(getIsTasksFetching);
	const page = useAppSelector(getTasksPage);
	const limit = useAppSelector(getTasksLimit);
	const {width} = useWindowSize();
	const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
	const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState("Нові");
	const [sortByTypeValue, setSortByTypeValue] = useState("Усі");

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
		<>
			<div
				className={classNames(styles.header, {
					[styles.phone]: width <= ScreenSizes.PhoneWidth
				})}
			>
				<ProfileSearchBar page={page} limit={limit} isFetching={isFetching} />
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
			<div
				className={classNames("wrapper", styles.items, {
					[styles.tablet]: width <= ScreenSizes.TabletWidth
				})}
			>
				{data.tasks.map((task: Task) => (
					<TaskItem
						key={task.uuid}
						id={task.uuid}
						creator={task.owner.profile}
						description={task.text}
						title={task.title}
						date={task.created_at}
						isActive={task.status === "open"}
					/>
				))}
			</div>
		</>
	);
};

export default ProfileTasks;
