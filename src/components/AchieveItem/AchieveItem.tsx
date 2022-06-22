import React, {FC} from "react";
import {IAchieve} from "@customTypes/index";
import Typography from "@components/Typography/Typography";
import styles from "./AchieveItem.module.scss";

const AchieveItem: FC<IAchieve & {icon: FC<{className?: string}>}> = ({
	description,
	icon: Icon
}) => (
	<div className={styles.item}>
		<Icon className={styles.icon} />
		<Typography variant="body1" component="p">
			{description}
		</Typography>
	</div>
);

export default AchieveItem;
