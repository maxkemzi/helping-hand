import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "@utils/constants/routes";
import styles from "./Logo.module.scss";
import LogoIcon from "../../icons/LogoIcon/LogoIcon";

const Logo: FC = () => (
	<NavLink className={styles.link} to={HOME_ROUTE}>
		<LogoIcon />
	</NavLink>
);

export default Logo;
