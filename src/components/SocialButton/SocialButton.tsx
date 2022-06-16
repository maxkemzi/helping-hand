import {css} from "@emotion/css";
import classNames from "classnames";
import {FC} from "react";
import styles from "./SocialButton.module.scss";

interface SocialButtonProps {
	className?: string;
	text: string;
	icon: FC<{className?: string}>;
	color: string;
}

const SocialButton: FC<SocialButtonProps> = ({
	text,
	className,
	icon: Icon,
	color
}) => (
	<button
		className={classNames(
			className,
			css`
				border-color: ${color};
				color: ${color};
				&:hover {
					background: ${color};
				}
			`,
			styles.button
		)}
		type="button"
	>
		<Icon className={styles.icon} />
		<span>{text}</span>
	</button>
);

export default SocialButton;
