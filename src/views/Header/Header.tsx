import React, {FC} from "react";
import Logo from "@components/Logo/Logo";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE} from "@utils/constants/routes";
import Avatar from "@components/Avatar/Avatar";
import HeaderMenu from "@views/Header/HeaderMenu/HeaderMenu";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import styles from "./Header.module.scss";

type Position = "relative" | "absolute";

interface HeaderProps {
	position?: Position;
	hasBorder?: boolean;
}

const Header: FC<HeaderProps> = ({position = "relative", hasBorder}) => {
	const isAuth = useSelector((state: RootState) => state.authState.isAuth);

	return (
		<header
			className={classNames(styles.header, styles[position], {
				[styles.bordered]: hasBorder
			})}
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
