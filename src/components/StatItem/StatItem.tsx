import React, {FC} from "react";
import {IStat} from "@customTypes/index";
import classNames from "classnames";
import Typography from "@components/Typography/Typography";
import styles from "./StatItem.module.scss";

const StatItem: FC<IStat & {className?: string}> = ({
	className,
	value,
	title
}) => (
	<div className={classNames(className, styles.item)}>
		<Typography className={styles.value} variant="h3" component="p">
			{value}
		</Typography>
		<Typography className={styles.title} variant="subtitle2" component="p">
			{title}
		</Typography>
	</div>
);

export default StatItem;
