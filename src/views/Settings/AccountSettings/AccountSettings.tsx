import React from "react";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import styles from "./AccountSettings.module.scss";

const AccountSettings = () => (
	<div>
		<h3 className={styles.title}>Акаунт</h3>
		<div className={styles.item}>
			<h4 className={styles["small-title"]}>Зображення профілю</h4>
			<div>
				<Avatar
					className={styles.avatar}
					imagePath=""
					width={80}
					height={80}
					fallbackVariant="light"
				/>
				<div className={styles.btns}>
					<Button className={styles.btn} variant="outline" text="Завантажити" />
					<Button className={styles.btn} variant="outline" text="Видалити" />
				</div>
			</div>
		</div>
	</div>
);

export default AccountSettings;
