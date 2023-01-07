import ClickExtender from "@components/ClickExtender/ClickExtender";
import React, {FC, MouseEventHandler} from "react";
import styles from "./KebabButton.module.scss";

interface KebabButtonProps {
	onClick?: MouseEventHandler;
	isActive?: boolean;
}

const KebabButton: FC<KebabButtonProps> = ({onClick, isActive}) => (
	<ClickExtender
		aria-label="kebab"
		onClick={onClick}
		type="button"
		isActive={isActive}
		className={styles.button}
	>
		<span />
		<span />
		<span />
	</ClickExtender>
);

export default KebabButton;
