import React from "react";
import DeveloperItem from "@components/DeveloperItem/DeveloperItem";
import styles from "./FooterDeveloperList.module.scss";

const FooterDeveloperList = () => (
	<div className={styles.devs}>
		<DeveloperItem
			className={styles.dev}
			name="Max K."
			job="Front-end"
			linkPath="https://t.me/maxkemzi"
		/>

		<DeveloperItem
			className={styles.dev}
			name="Andreas M."
			job="Back-end"
			linkPath="https://t.me/mi_xxx"
		/>
	</div>
);

export default FooterDeveloperList;
