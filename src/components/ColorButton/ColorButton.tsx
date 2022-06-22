import React, {FC} from "react";
import classNames from "classnames";
import {css} from "@emotion/css";
import styles from "./ColorButton.module.scss";

interface ColorItemProps {
	className?: string;
	onClick: (color: string) => void;
	activeColorName: string;
	color: string;
}

const ColorButton: FC<ColorItemProps> = ({
	className,
	color,
	onClick,
	activeColorName
}) => (
	<button
		aria-label="color"
		type="button"
		className={classNames(
			className,
			styles.item,
			styles.green,
			{
				[styles.active]: activeColorName === color
			},
			css`
				background: ${color};
			`
		)}
		onClick={() => onClick(color)}
	/>
);

export default ColorButton;
