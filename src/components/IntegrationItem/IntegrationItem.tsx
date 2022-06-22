import React, {FC} from "react";
import classNames from "classnames";
import Button from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import styles from "./IntegrationItem.module.scss";

interface IntegrationItemProps {
	className?: string;
	icon: FC<{className?: string}>;
	text: string;
}

const IntegrationItem: FC<IntegrationItemProps> = ({
	className,
	icon: Icon,
	text
}) => (
	<div className={classNames(className, styles.item)}>
		<div className={styles.info}>
			<Icon className={styles.icon} />
			<Typography variant="body1" component="p">
				{text}
			</Typography>
		</div>
		<Button text="Приєднати" variant="outline" />
	</div>
);

export default IntegrationItem;
