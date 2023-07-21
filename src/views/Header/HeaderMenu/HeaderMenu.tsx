import Menu from "@components/Menu/Menu";
import MenuButton from "@components/MenuButton/MenuButton";
import MenuItem from "@components/MenuItem/MenuItem";
import {getIsAuth, getIsAuthSubmitting} from "@store/auth/auth.selectors";
import {ModalTypes} from "@utils/constants/modal";
import {
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_TASKS_ROUTE,
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTERFACE_ROUTE,
	STATISTICS_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import React, {memo, useRef, useState} from "react";
import {
	IoExit,
	IoHome,
	IoLayers,
	IoMegaphone,
	IoPerson,
	IoSettings,
	IoStatsChart
} from "react-icons/io5";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useModalContext} from "../../../contexts/ModalContext";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import AuthService from "../../../services/auth/auth.service";

const HeaderMenu = memo(() => {
	const isAuth = useSelector(getIsAuth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {openModal, closeModal} = useModalContext();
	const [isOpen, setIsOpen] = useState(false);
	const parentRef = useRef<HTMLDivElement>(null);
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
					path={STATISTICS_ROUTE}
					icon={IoStatsChart}
					text="Статистика"
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
