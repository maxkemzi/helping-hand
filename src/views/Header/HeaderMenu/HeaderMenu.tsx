import React, {memo, useRef, useState} from "react";
import MenuButton from "@components/MenuButton/MenuButton";
import Menu from "@components/Menu/Menu";
import MenuItem from "@components/MenuItem/MenuItem";
import {
	HOME_ROUTE,
	INTEGRATION_ROUTE,
	LOGIN_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTERFACE_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import {
	IoExit,
	IoExtensionPuzzle,
	IoHome,
	IoLayers,
	IoMegaphone,
	IoPerson,
	IoSettings
} from "react-icons/io5";
import {getIsIntegrationsConnected} from "@store/integrations/integrations.selectors";
import {getIsAuth, getIsAuthSubmitting} from "@store/auth/auth.selectors";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ModalTypes} from "@utils/constants/modal";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import useAppSelector from "../../../hooks/useAppSelector";
import AuthService from "../../../services/auth/auth.service";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {useModalContext} from "../../../contexts/ModalContext";

const HeaderMenu = memo(() => {
	const isAuth = useSelector(getIsAuth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {openModal, closeModal} = useModalContext();
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);
	const isConnected = useAppSelector(getIsIntegrationsConnected);
	const isSubmitting = useAppSelector(getIsAuthSubmitting);

	useListenClickOutside(parentRef, () => setIsOpen(false));

	const handleButtonClick = () => setIsOpen(!isOpen);

	const handleItemClick = () => setIsOpen(false);

	const handleContactClick = () => {
		openModal(ModalTypes.Contact, {onClose: closeModal});
		setIsOpen(false);
	};

	const handleLogout = () =>
		dispatch(
			AuthService.logout(() => {
				navigate(LOGIN_ROUTE);
			})
		);

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
				{isAuth && (
					<MenuItem
						isDisabled={isSubmitting}
						onClick={handleLogout}
						as="button"
						icon={IoExit}
						text="Вийти"
					/>
				)}
			</Menu>
		</div>
	);
});

export default HeaderMenu;
