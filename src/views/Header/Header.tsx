import React, {FC} from "react";
import Logo from "@components/Logo/Logo";
import HeaderLanguageDropdown from "@views/Header/HeaderLanguageDropdown/HeaderLanguageDropdown";
import classNames from "classnames";
import {NavLink, useLocation} from "react-router-dom";
import {
	PROFILE_ROUTE,
	ROUTES_WITH_ABSOLUTE_HEADER,
	ROUTES_WITH_BORDER_HEADER
} from "@utils/constants/routes";
import Avatar from "@components/Avatar/Avatar";
import HeaderMenu from "@views/Header/HeaderMenu/HeaderMenu";
import styles from "./Header.module.scss";

const Header: FC = () => {
	const isAuth = true;
	const location = useLocation();
	let position = "relative";
	let variant = "";

	if (ROUTES_WITH_ABSOLUTE_HEADER.includes(location.pathname)) {
		position = "absolute";
	} else if (ROUTES_WITH_BORDER_HEADER.includes(location.pathname)) {
		variant = "border";
	}

	return (
		<header
			className={classNames(styles.header, styles[position], styles[variant])}
		>
			<div className="container">
				<div className={styles.inner}>
					<Logo />
					{isAuth ? (
						<div className={styles.info}>
							<NavLink className={styles.link} to={PROFILE_ROUTE}>
								<Avatar className={styles.avatar} imagePath="" />
							</NavLink>
							<HeaderMenu />
						</div>
					) : (
						<HeaderLanguageDropdown />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
