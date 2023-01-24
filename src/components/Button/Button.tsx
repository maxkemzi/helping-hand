import React, {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import {IconType} from "react-icons";
import styles from "./Button.module.scss";

type Variant = "primary" | "outline";
type Size = "big" | "medium" | "small";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string | number;
	isSubmit?: boolean;
	variant?: Variant;
	size?: Size;
	className?: string;
	startIcon?: IconType;
	endIcon?: IconType;
	isActive?: boolean;
	children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
	text,
	className,
	variant = "primary",
	size = "medium",
	startIcon: StartIcon,
	endIcon: EndIcon,
	isActive,
	isSubmit,
	children,
	...props
}) => (
	<button
		className={classNames(
			className,
			styles.button,
			{
				[styles["icon-btn"]]: !!StartIcon || !!EndIcon,
				[styles.active]: isActive
			},
			styles[variant],
			styles[size]
		)}
		type={isSubmit ? "submit" : "button"}
		{...props}
	>
		{StartIcon && (
			<StartIcon className={classNames(styles.icon, styles.start)} size={20} />
		)}
		{StartIcon || EndIcon ? <span>{text || children}</span> : text || children}
		{EndIcon && (
			<EndIcon className={classNames(styles.icon, styles.end)} size={20} />
		)}
	</button>
);

export default Button;
