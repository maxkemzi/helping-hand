import React, {FC} from "react";
import {ReactComponent as LogoIcon} from "@images/logo.svg";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "@utils/constants/routes";
import styles from "./Logo.module.scss";

const Logo: FC = () => (
	<NavLink className={styles.link} to={HOME_ROUTE}>
		<LogoIcon />
	</NavLink>
);

export default Logo;
