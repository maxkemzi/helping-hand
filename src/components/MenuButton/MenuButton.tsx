import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import styles from "./MenuButton.module.scss";

interface MenuButtonProps {
	onClick: MouseEventHandler;
	isActive?: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({onClick, isActive}) => (
	<button
		onClick={onClick}
		type="button"
		className={classNames(styles.button, {[styles.active]: isActive})}
	>
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
	</button>
);

export default MenuButton;
