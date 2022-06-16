import {LOGIN_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routes";
import classNames from "classnames";
import {NavLink, useLocation} from "react-router-dom";
import styles from "./AuthFormTabs.module.scss";

const AuthFormTabs = () => {
	const location = useLocation();

	return (
		<div
			className={classNames(styles.tabs, {
				[styles.login]: location.pathname === LOGIN_ROUTE,
				[styles.signup]: location.pathname === SIGNUP_ROUTE
			})}
		>
			<NavLink
				className={({isActive}) =>
					classNames(styles.tab, {[styles.active]: isActive})
				}
				to={LOGIN_ROUTE}
			>
				вхід
			</NavLink>
			<NavLink
				className={({isActive}) =>
					classNames(styles.tab, {[styles.active]: isActive})
				}
				to={SIGNUP_ROUTE}
			>
				Реєстрація
			</NavLink>
		</div>
	);
};

export default AuthFormTabs;
