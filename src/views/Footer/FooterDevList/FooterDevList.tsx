import React from "react";
import FooterDevItem from "@views/Footer/FooterDevItem/FooterDevItem";
import styles from "./FooterDevList.module.scss";

const FooterDevList = () => (
	<div className={styles.devs}>
		<FooterDevItem
			className={styles.dev}
			name="Max K."
			work="Front-end by"
			linkPath="https://t.me/maxkemzi"
		/>
		<FooterDevItem
			className={styles.dev}
			name="Andreas M."
			work="Back-end by"
			linkPath="https://t.me/mi_xxx"
		/>
	</div>
);

export default FooterDevList;
