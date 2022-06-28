import React, {AnchorHTMLAttributes, FC} from "react";
import classNames from "classnames";
import styles from "./Link.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	text: string;
}

const Link: FC<LinkProps> = ({className, text, ...props}) => (
	<a
		target="_blank"
		rel="noreferrer noopener"
		className={classNames(className, styles.link)}
		{...props}
	>
		{text}
	</a>
);

export default Link;
