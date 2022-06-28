import React, {FC} from "react";
import classNames from "classnames";
import Link from "@components/Link/Link";
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
		<Link href={linkPath} text={name} />
	</div>
);

export default FooterDevItem;
