import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
	className?: string;
	icon: FC<{className?: string}>;
	text: string;
	path: string;
	onClick: MouseEventHandler;
}

const MenuItem: FC<MenuItemProps> = ({
	className,
	onClick,
	icon: Icon,
	text,
	path
}) => (
	<NavLink
		onClick={onClick}
		to={path}
		end
		className={({isActive}) =>
			classNames(className, styles.item, {[styles.active]: isActive})
		}
	>
		<Icon className={styles.icon} />
		<span>{text}</span>
	</NavLink>
);

export default MenuItem;
