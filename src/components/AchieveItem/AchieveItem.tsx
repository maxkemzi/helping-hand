import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import styles from "./AchieveItem.module.scss";

interface AchieveItemProps {
	description: string;
	icon: FC<{className?: string}>;
}

const AchieveItem: FC<AchieveItemProps> = ({description, icon: Icon}) => (
	<div className={styles.item}>
		<Icon className={styles.icon} />
		<Typography variant="body1" component="p">
			{description}
		</Typography>
	</div>
);

export default AchieveItem;
