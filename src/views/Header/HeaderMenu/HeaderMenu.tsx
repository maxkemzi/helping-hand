import React, {useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {
	HOME_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import HomeIcon from "@icons/HomeIcon/HomeIcon";
import TasksIcon from "@icons/TasksIcon/TasksIcon";
import UserIcon from "@icons/UserIcon/UserIcon";
import SettingsIcon from "@icons/SettingsIcon/SettingsIcon";
import {useTranslation} from "react-i18next";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);
	const {t} = useTranslation();

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
					text={t("menuItems.home")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={TASKS_ROUTE}
					icon={TasksIcon}
					text={t("menuItems.tasks")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={PROFILE_TASKS_ROUTE}
					icon={UserIcon}
					text={t("menuItems.profile")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={SETTINGS_ACCOUNT_ROUTE}
					icon={SettingsIcon}
					text={t("menuItems.settings")}
				/>
			</Menu>
		</div>
	);
};

export default HeaderMenu;
