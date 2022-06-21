import React, {FC} from "react";
import classNames from "classnames";
import Button from "@components/Button/Button";
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
			<p className={styles.text}>{text}</p>
		</div>
		<Button text="Приєднати" variant="outline" />
	</div>
);

export default IntegrationItem;
