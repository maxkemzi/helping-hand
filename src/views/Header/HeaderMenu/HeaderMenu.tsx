import React, {memo, useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {
	HOME_ROUTE,
	INTEGRATION_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTERFACE_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import Modal from "@components/Modal/Modal";
import HeaderContactForm from "@views/Header/HeaderContactForm/HeaderContactForm";
import {
	IoExtensionPuzzle,
	IoHome,
	IoLayers,
	IoMegaphone,
	IoPerson,
	IoSettings
} from "react-icons/io5";
import {getIsIntegrationsConnected} from "@store/integrations/integrations.selectors";
import {getIsAuth} from "@store/auth/auth.selectors";
import {useSelector} from "react-redux";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import useAppSelector from "../../../hooks/useAppSelector";

const HeaderMenu = memo(() => {
	const isAuth = useSelector(getIsAuth);
	const [isVisible, setIsVisible] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);
	const isConnected = useAppSelector(getIsIntegrationsConnected);

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
					text="Головна"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={TASKS_ROUTE}
					icon={IoLayers}
					text="Завдання"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={PROFILE_TASKS_ROUTE}
					icon={IoPerson}
					text="Профіль"
				/>
				<MenuItem
					onClick={handleItemClick}
					path={isAuth ? SETTINGS_ACCOUNT_ROUTE : SETTINGS_INTERFACE_ROUTE}
					icon={IoSettings}
					text="Налаштування"
				/>
				<MenuItem
					onClick={handleContactClick}
					as="button"
					icon={IoMegaphone}
					text="Зв'язатись"
				/>
				{isConnected && (
					<MenuItem
						onClick={handleItemClick}
						path={INTEGRATION_ROUTE}
						icon={IoExtensionPuzzle}
						text="Triton"
					/>
				)}
			</Menu>
			<Modal
				title="Зв'язатись"
				isVisible={isVisible}
				setIsVisible={setIsVisible}
			>
				<HeaderContactForm />
			</Modal>
		</div>
	);
});

export default HeaderMenu;
