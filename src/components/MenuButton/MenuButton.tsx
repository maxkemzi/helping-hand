import React, {FC} from "react";
import styles from "./MenuButton.module.scss";

interface MenuButtonProps {
	onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({onClick}) => (
	<button onClick={onClick} type="button" className={styles.button}>
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
