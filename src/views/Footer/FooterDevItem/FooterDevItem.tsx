import React, {FC} from "react";
import classNames from "classnames";
import styles from "./FooterDevItem.module.scss";

interface FooterDevItemProps {
	name: string;
	work: string;
	linkPath: string;
	className?: string;
}

const FooterDevItem: FC<FooterDevItemProps> = ({
	work,
	linkPath,
	name,
	className
}) => (
	<div className={classNames(className, styles.item)}>
		<p className={styles.work}>{work}</p>
		<a
			className={styles.name}
			href={linkPath}
			rel="noreferrer noopener"
			target="_blank"
		>
			{name}
		</a>
	</div>
);

export default FooterDevItem;
