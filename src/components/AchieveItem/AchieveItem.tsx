import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import {IconType} from "react-icons";
import styles from "./AchieveItem.module.scss";

interface AchieveItemProps {
	description: string;
	icon: IconType;
}

const AchieveItem: FC<AchieveItemProps> = ({description, icon: Icon}) => (
	<div className={styles.item}>
		<Icon className={styles.icon} size={36} />
		<Typography variant="body1" component="p">
			{description}
		</Typography>
	</div>
);

export default AchieveItem;
