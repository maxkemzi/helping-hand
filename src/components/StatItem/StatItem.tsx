import React, {FC} from "react";
import {IStat} from "@models/models";
import classNames from "classnames";
import styles from "./StatItem.module.scss";

const StatItem: FC<IStat & {className?: string}> = ({
	className,
	value,
	title
}) => (
	<div className={classNames(className, styles.item)}>
		<p className={styles.value}>{value}</p>
		<p className={styles.title}>{title}</p>
	</div>
);

export default StatItem;
