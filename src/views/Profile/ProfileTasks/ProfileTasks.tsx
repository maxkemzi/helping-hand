import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import TaskItem from "@components/TaskItem/TaskItem";
import {DropdownOption as IDropdownOption} from "@customTypes/components";
import {getAuthUser} from "@store/auth/auth.selectors";
import {
	getIsTasksFetching,
	getTasks,
	getTasksLimit
} from "@store/tasks/tasks.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import getParsedDate from "@utils/helpers/getParsedDate";
import ProfileSearchBar from "@views/Profile/ProfileSearchBar/ProfileSearchBar";
import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import useWindowSize from "../../../hooks/useWindowSize";
import TasksService from "../../../services/tasks/tasks.service";
import styles from "./ProfileTasks.module.scss";

const ProfileTasks = () => {
	const params = useParams();
	const user = useAppSelector(getAuthUser);
	const id = params.id || user.id;
	const tasks = useAppSelector(getTasks);
	const dispatch = useAppDispatch();
	const isFetching = useAppSelector(getIsTasksFetching);
	const limit = useAppSelector(getTasksLimit);
	const {width} = useWindowSize();
	const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
	const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
	const [sortByDateValue, setSortByDateValue] = useState({
		text: "Нові",
		value: "new"
	});
	const [sortByTypeValue, setSortByTypeValue] = useState({
		text: "Усі",
		value: "all"
	});

	const handleDateClose = () => setIsDateDropdownOpen(false);

	const toggleDateOpen = () => setIsDateDropdownOpen(!isDateDropdownOpen);

	const handleTypeClose = () => setIsTypeDropdownOpen(false);

	const toggleTypeOpen = () => setIsTypeDropdownOpen(!isTypeDropdownOpen);

	const handleSortByDateClick = (option: IDropdownOption) => {
		setSortByDateValue(option);
		handleDateClose();
	};

	const handleSortByTypeClick = (option: IDropdownOption) => {
		setSortByTypeValue(option);
		handleTypeClose();
	};

	useEffect(() => {
		dispatch(TasksService.fetchLatest(id, {limit}));
	}, [dispatch, id, limit]);

	return (
		<>
			<div
				className={classNames(styles.header, {
					[styles.phone]: width <= ScreenSizes.PhoneWidth
				})}
			>
				<ProfileSearchBar limit={limit} isFetching={isFetching} />
				<div className={styles.sorts}>
					<Dropdown
						variant="big"
						className={styles.dropdown}
						isOpen={isDateDropdownOpen}
						onClose={handleDateClose}
						toggleOpen={toggleDateOpen}
						value={sortByDateValue.text}
					>
						<DropdownOption
							onClick={handleSortByDateClick}
							isActive={sortByDateValue.value === "new"}
							value="new"
							text="Нові"
						/>
						<DropdownOption
							onClick={handleSortByDateClick}
							isActive={sortByDateValue.value === "old"}
							value="old"
							text="Старі"
						/>
					</Dropdown>

					<Dropdown
						variant="big"
						className={styles.dropdown}
						isOpen={isTypeDropdownOpen}
						onClose={handleTypeClose}
						toggleOpen={toggleTypeOpen}
						value={sortByTypeValue.text}
					>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue.value === "all"}
							value="all"
							text="Усі"
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue.value === "solved"}
							value="solved"
							text="Вирішені"
						/>
						<DropdownOption
							onClick={handleSortByTypeClick}
							isActive={sortByTypeValue.value === "created"}
							value="created"
							text="Створені"
						/>
					</Dropdown>
				</div>
			</div>
			<div
				className={classNames("wrapper", styles.items, {
					[styles.tablet]: width <= ScreenSizes.TabletWidth
				})}
			>
				{isFetching
					? "Loading..."
					: tasks.map(task => (
							<TaskItem
								key={task.id}
								id={task.id}
								creator={task.creator}
								tags={task.tags}
								description={task.text}
								title={task.title}
								date={getParsedDate(task.createdAt)}
								isActive={task.status === "open"}
							/>
					  ))}
			</div>
		</>
	);
};

export default ProfileTasks;
