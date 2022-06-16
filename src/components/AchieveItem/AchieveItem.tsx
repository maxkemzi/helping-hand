import React, {FC} from "react";
import {IAchieve} from "@models/models";
import styles from "./AchieveItem.module.scss";

const AchieveItem: FC<IAchieve & {icon: FC<{className?: string}>}> = ({
	description,
	icon: Icon
}) => (
	<div className={styles.item}>
		<Icon className={styles.icon} />
		<p>{description}</p>
	</div>
);

export default AchieveItem;
