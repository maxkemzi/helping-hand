import React, {FC, memo} from "react";
import Logo from "@components/Logo/Logo";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {PROFILE_TASKS_ROUTE} from "@utils/constants/routes";
import Avatar from "@components/Avatar/Avatar";
import HeaderMenu from "@views/Header/HeaderMenu/HeaderMenu";
import {getIsAuth} from "@store/auth/auth.selectors";
import styles from "./Header.module.scss";
import useAppSelector from "../../hooks/useAppSelector";

type Position = "relative" | "absolute";

interface HeaderProps {
	position?: Position;
	hasBorder?: boolean;
}

const Header: FC<HeaderProps> = memo(({position = "relative", hasBorder}) => {
	const isAuth = useAppSelector(getIsAuth);

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
						{isAuth && (
							<NavLink className={styles.avatar} to={PROFILE_TASKS_ROUTE}>
								<Avatar fallbackVariant="lighter" imagePath="" />
							</NavLink>
						)}
						<HeaderMenu />
					</div>
				</div>
			</div>
		</header>
	);
});

export default Header;
