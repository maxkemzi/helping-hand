import React, {ButtonHTMLAttributes, FC} from "react";
import classNames from "classnames";
import {IconProps} from "@customTypes/components";
import styles from "./Button.module.scss";

type Variant = "primary" | "outline";
type Size = "big" | "medium" | "small";

interface ButtonProps {
	text: string;
	isSubmit?: boolean;
	variant?: Variant;
	size?: Size;
	className?: string;
	startIcon?: FC<IconProps>;
	isActive?: boolean;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
	text,
	className,
	variant = "primary",
	size = "medium",
	startIcon: Icon,
	isActive,
	isSubmit,
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
		{Icon && <Icon className={styles.icon} width={20} height={20} />}
		{Icon ? <span>{text}</span> : text}
	</button>
);

export default Button;
