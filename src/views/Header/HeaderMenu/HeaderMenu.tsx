import React, {memo, useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {
	HOME_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import {useTranslation} from "react-i18next";
import Modal from "@components/Modal/Modal";
import HeaderContactForm from "@views/Header/HeaderContactForm/HeaderContactForm";
import {
	IoLayers,
	IoHome,
	IoMegaphone,
	IoPerson,
	IoSettings
} from "react-icons/io5";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const HeaderMenu = memo(() => {
	const [isVisible, setIsVisible] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);
	const {t} = useTranslation();

	useListenClickOutside(parentRef, () => setIsOpen(false));

	const handleButtonClick = () => setIsOpen(!isOpen);

	const handleItemClick = () => setIsOpen(false);

	const handleContactClick = () => {
		setIsVisible(true);
		setIsOpen(false);
	};

	return (
		<div ref={parentRef}>
			<MenuButton isActive={isOpen} onClick={handleButtonClick} />
			<Menu isOpen={isOpen}>
				<MenuItem
					onClick={handleItemClick}
					path={HOME_ROUTE}
					icon={IoHome}
					text={t("menuItems.home")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={TASKS_ROUTE}
					icon={IoLayers}
					text={t("menuItems.tasks")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={PROFILE_TASKS_ROUTE}
					icon={IoPerson}
					text={t("menuItems.profile")}
				/>
				<MenuItem
					onClick={handleItemClick}
					path={SETTINGS_ACCOUNT_ROUTE}
					icon={IoSettings}
					text={t("menuItems.settings")}
				/>
				<MenuItem
					onClick={handleContactClick}
					as="button"
					icon={IoMegaphone}
					text={t("menuItems.contact")}
				/>
			</Menu>
			<Modal title="Contact" isVisible={isVisible} setIsVisible={setIsVisible}>
				<HeaderContactForm />
			</Modal>
		</div>
	);
});

export default HeaderMenu;
