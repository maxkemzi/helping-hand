import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import Button from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import styles from "./IntegrationItem.module.scss";

interface IntegrationItemProps {
	className?: string;
	icon: FC<{className?: string}>;
	text: string;
	onClick?: MouseEventHandler;
	onConnectedClick?: MouseEventHandler;
	onDelete?: MouseEventHandler;
	isConnected: boolean;
}

const IntegrationItem: FC<IntegrationItemProps> = ({
	isConnected,
	className,
	icon: Icon,
	onClick,
	onConnectedClick,
	onDelete,
	text
}) => (
	<div className={classNames(className, styles.item)}>
		<div className={styles.info}>
			<Icon className={styles.icon} />
			{text && (
				<Typography className={styles.text} variant="body1" component="p">
					{text}
				</Typography>
			)}
		</div>

		{isConnected ? (
			<div className={styles.buttons}>
				<Button
					className={styles.button}
					onClick={onConnectedClick}
					text="Перейти"
					variant="primary"
				/>
				<Button
					className={styles.button}
					onClick={onDelete}
					text="Видалити"
					variant="outline"
				/>
			</div>
		) : (
			<Button onClick={onClick} text="Приєднати" variant="outline" />
		)}
	</div>
);

export default IntegrationItem;
