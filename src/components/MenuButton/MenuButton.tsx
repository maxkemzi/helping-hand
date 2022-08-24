import React, {FC, memo, MouseEventHandler} from "react";
import ClickExtender from "@components/ClickExtender/ClickExtender";
import styles from "./MenuButton.module.scss";

interface MenuButtonProps {
	onClick: MouseEventHandler;
	isActive?: boolean;
}

const MenuButton: FC<MenuButtonProps> = memo(({onClick, isActive}) => (
	<ClickExtender
		aria-label="menu"
		onClick={onClick}
		type="button"
		isActive={isActive}
		className={styles.button}
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
	</ClickExtender>
));

export default MenuButton;
