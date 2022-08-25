import React, {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import {IconType} from "react-icons";
import styles from "./Button.module.scss";

type Variant = "primary" | "outline";
type Size = "big" | "medium" | "small";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	isSubmit?: boolean;
	variant?: Variant;
	size?: Size;
	className?: string;
	startIcon?: IconType;
	isActive?: boolean;
	children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
	text,
	className,
	variant = "primary",
	size = "medium",
	startIcon: Icon,
	isActive,
	isSubmit,
	children,
	...props
}) => (
	<button
		className={classNames(
			className,
			styles.button,
			{[styles["icon-btn"]]: !!Icon, [styles.active]: isActive},
			styles[variant],
			styles[size]
		)}
		type={isSubmit ? "submit" : "button"}
		{...props}
	>
		{Icon && <Icon className={styles.icon} size={20} />}
		{Icon ? <span>{text || children}</span> : text || children}
	</button>
);

export default Button;
