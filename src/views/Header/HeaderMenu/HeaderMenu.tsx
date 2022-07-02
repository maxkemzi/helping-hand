import React, {useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {
	HOME_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import HomeIcon from "@icons/HomeIcon/HomeIcon";
import TasksIcon from "@icons/TasksIcon/TasksIcon";
import UserIcon from "@icons/UserIcon/UserIcon";
import SettingsIcon from "@icons/SettingsIcon/SettingsIcon";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);

	useListenClickOutside(parentRef, () => setIsOpen(false));

	const handleButtonClick = () => setIsOpen(!isOpen);

	const handleItemClick = () => setIsOpen(false);

	return (
		<div ref={parentRef}>
			<MenuButton isActive={isOpen} onClick={handleButtonClick} />
			<Menu isOpen={isOpen}>
				<MenuItem
					onClick={handleItemClick}
					path={HOME_ROUTE}
					icon={HomeIcon}
					text="Головна"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={TASKS_ROUTE}
					icon={TasksIcon}
					text="Завдання"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={PROFILE_ROUTE}
					icon={UserIcon}
					text="Мій профіль"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={SETTINGS_ROUTE}
					icon={SettingsIcon}
					text="Налаштування"
				/>
			</Menu>
		</div>
	);
};

export default HeaderMenu;
