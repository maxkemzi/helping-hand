import React, {useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {ReactComponent as ProfileIcon} from "@images/profile.svg";
import {ReactComponent as TaskIcon} from "@images/task.svg";
import {ReactComponent as HomeIcon} from "@images/home.svg";
import {ReactComponent as SettingsIcon} from "@images/settings.svg";
import {
	HOME_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef(null);

	useListenClickOutside(parentRef, () => setIsOpen(false));

	const handleButtonClick = () => setIsOpen(!isOpen);

	const handleItemClick = () => setIsOpen(false);

	return (
		<div ref={parentRef}>
			<MenuButton onClick={handleButtonClick} />
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
					icon={TaskIcon}
					text="Завдання"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={PROFILE_ROUTE}
					icon={ProfileIcon}
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
