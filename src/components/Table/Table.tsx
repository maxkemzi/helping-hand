import React from "react";
import classNames from "classnames";
import styles from "./Table.module.scss";

const Table = () => (
	<div className={styles["table-container"]} role="table">
		<div className={classNames(styles.header, styles.table)} role="rowgroup">
			<div className={styles.row} role="columnheader">
				Country
			</div>
			<div className={styles.row} role="columnheader">
				Events
			</div>
			<div className={styles.row} role="columnheader">
				Time
			</div>
			<div className={styles.row} role="columnheader">
				Fees
			</div>
		</div>
		<div className={styles.table} role="rowgroup">
			<div className={styles.row} role="cell">
				United Kingdom
			</div>
			<div className={styles.row} role="cell">
				Stonehenge, Windsor and Bath with Pub Lunch
			</div>
			<div className={styles.row} role="cell">
				19 Sep, 1p.m.
			</div>
			<div className={styles.row} role="cell">
				US$500
			</div>
			<div className={styles.row} role="cell">
				United Kingdom
			</div>
			<div className={styles.row} role="cell">
				Stonehenge, Windsor and Bath with Pub Lunch
			</div>
			<div className={styles.row} role="cell">
				19 Sep, 1p.m.
			</div>
			<div className={styles.row} role="cell">
				US$500
			</div>
		</div>
	</div>
);

export default Table;
