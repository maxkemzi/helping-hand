import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type Variant = "primary" | "outline";
type Size = "big" | "medium" | "small";

interface ButtonProps {
	text: string;
	isSubmit?: boolean;
	variant?: Variant;
	size?: Size;
	onClick?: () => void;
	isLoading?: boolean;
	className?: string;
	startIcon?: FC<{className?: string}>;
}

const noop = () => {};

const Button: FC<ButtonProps> = ({
	text,
	className,
	isLoading,
	onClick = noop,
	variant = "primary",
	isSubmit,
	size = "medium",
	startIcon: Icon
}) => (
	<button
		disabled={isLoading}
		className={classNames(
			className,
			styles.button,
			{[styles["icon-btn"]]: !!Icon},
			styles[variant],
			styles[size]
		)}
		type={isSubmit ? "submit" : "button"}
		onClick={onClick}
	>
		{Icon && <Icon className={styles.icon} />}
		{Icon ? <span>{text}</span> : text}
	</button>
);

export default Button;
