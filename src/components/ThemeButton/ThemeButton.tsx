import React, {FC} from "react";
import classNames from "classnames";
import {css} from "@emotion/css";
import {ITheme} from "@customTypes/index";
import styles from "./ThemeButton.module.scss";

interface ColorItemProps {
	className?: string;
	onClick: (theme: ITheme) => void;
	isActive: boolean;
	theme: ITheme;
}

const ThemeButton: FC<ColorItemProps> = ({
	className,
	theme,
	onClick,
	isActive
}) => (
	<button
		aria-label="color"
		type="button"
		className={classNames(
			className,
			styles.item,
			styles.green,
			{
				[styles.active]: isActive
			},
			css`
				background: ${theme.styles["color-accent"]};
			`
		)}
		onClick={() => onClick(theme)}
	/>
);

export default ThemeButton;
