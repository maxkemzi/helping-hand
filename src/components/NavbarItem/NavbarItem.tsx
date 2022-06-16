import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavbarItem.module.scss";

interface NavbarItemProps {
	text: string;
	path: string;
}

const NavbarItem: FC<NavbarItemProps> = ({text, path}) => (
	<li>
		<NavLink to={path} className={styles.item}>
			{text}
		</NavLink>
	</li>
);

export default NavbarItem;
