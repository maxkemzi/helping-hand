import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import styles from "./NavbarItem.module.scss";

interface NavbarItemProps {
	path: string;
	text: string;
	className?: string;
}

const NavbarItem: FC<NavbarItemProps> = ({path, text, className}) => (
	<NavLink className={classNames(className, styles.item)} to={path}>
		{text}
	</NavLink>
);

export default NavbarItem;
