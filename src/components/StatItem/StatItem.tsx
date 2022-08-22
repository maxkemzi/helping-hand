import React, {FC} from "react";
import classNames from "classnames";
import Typography from "@components/Typography/Typography";
import styles from "./StatItem.module.scss";

type Size = "small" | "big";

interface StatItemProps {
	value: number | string;
	title: string;
	className?: string;
	size?: Size;
}

const StatItem: FC<StatItemProps> = ({
	className,
	value,
	title,
	size = "small"
}) => (
	<div className={classNames(className, styles.item, styles[size])}>
		<p className={styles.title}>{title}</p>
		<Typography className={styles.value} variant="body1" component="p">
			{value}
		</Typography>
	</div>
);

export default StatItem;
