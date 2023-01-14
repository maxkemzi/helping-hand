import React, {ButtonHTMLAttributes, FC} from "react";
import {IconType} from "react-icons";
import classNames from "classnames";
import styles from "./TiptapMenuButton.module.scss";

interface TiptapMenuButtonProps {
	isActive?: boolean;
	icon?: IconType;
}

const TiptapMenuButton: FC<
	TiptapMenuButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({isActive, icon: Icon, ...props}) => (
	<button
		type="button"
		className={classNames(styles.button, {[styles.active]: isActive})}
		{...props}
	>
		<Icon className={styles.icon} size={20} />
	</button>
);

export default TiptapMenuButton;
