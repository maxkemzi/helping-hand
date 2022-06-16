import React, {useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {ReactComponent as ProfileIcon} from "@images/profile.svg";
import {ReactComponent as TaskIcon} from "@images/task.svg";
import {HOME_ROUTE, TASKS_ROUTE} from "@utils/constants/routes";
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
					icon={ProfileIcon}
					text="Головна"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={TASKS_ROUTE}
					icon={TaskIcon}
					text="Завдання"
				/>
			</Menu>
		</div>
	);
};

export default HeaderMenu;
