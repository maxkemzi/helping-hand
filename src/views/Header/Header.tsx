import React, {FC} from "react";
import Logo from "@components/Logo/Logo";
import classNames from "classnames";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {
	PROFILE_ROUTE,
	ROUTES_WITH_ABSOLUTE_HEADER,
	ROUTES_WITH_BORDER_HEADER
} from "@utils/constants/routes";
import Avatar from "@components/Avatar/Avatar";
import HeaderMenu from "@views/Header/HeaderMenu/HeaderMenu";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import styles from "./Header.module.scss";

const Header: FC = () => {
	const isAuth = useSelector((state: RootState) => state.authState.isAuth);
	const params = useParams();
	const location = useLocation();
	let position = "relative";
	let variant = "";

	if (ROUTES_WITH_ABSOLUTE_HEADER.includes(location.pathname)) {
		position = "absolute";
	} else if (
		ROUTES_WITH_BORDER_HEADER.includes(location.pathname) ||
		!!params
	) {
		variant = "border";
	}

	return (
		<header
			className={classNames(styles.header, styles[position], styles[variant])}
		>
			<div className="container">
				<div className={styles.inner}>
					<Logo />
					<div className={styles.info}>
						{isAuth ? (
							<NavLink className={styles.avatar} to={PROFILE_ROUTE}>
								<Avatar fallbackVariant="lighter" imagePath="" />
							</NavLink>
						) : (
							<LanguageDropdown className={styles.avatar} />
						)}
						<HeaderMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
