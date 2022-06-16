import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Menu.module.scss";

interface MenuProps {
	className?: string;
	isOpen: boolean;
	children: ReactNode;
}

const Menu: FC<MenuProps> = ({className, isOpen, children}) => (
	<div className={classNames(className, styles.menu, {[styles.open]: isOpen})}>
		{children}
	</div>
);

export default Menu;
