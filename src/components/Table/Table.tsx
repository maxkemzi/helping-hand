import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Table.module.scss";

interface TableProps {
	koef: number;
}

const Table: FC<TableProps> = ({koef}) => (
	<div className={styles["table-container"]} role="table">
		<div className={classNames(styles.header, styles.table)} role="rowgroup">
			<div className={classNames(styles.row, styles.head)} role="columnheader">
				Курс
			</div>
			<div className={classNames(styles.row, styles.head)} role="columnheader">
				Ім&apos;я
			</div>
			<div className={classNames(styles.row, styles.head)} role="columnheader">
				Відповідей
			</div>
			<div className={classNames(styles.row, styles.head)} role="columnheader">
				Семестр
			</div>
			<div className={classNames(styles.row, styles.head)} role="columnheader">
				Результат
			</div>
		</div>
		<div className={styles.table} role="rowgroup">
			<div className={styles.row} role="cell">
				1
			</div>
			<div className={styles.row} role="cell">
				Max
			</div>
			<div className={styles.row} role="cell">
				12
			</div>
			<div className={styles.row} role="cell">
				2
			</div>
			<div className={styles.row} role="cell">
				20
			</div>
			<div className={styles.row} role="cell">
				2
			</div>
			<div className={styles.row} role="cell">
				Andrew
			</div>
			<div className={styles.row} role="cell">
				12
			</div>
			<div className={styles.row} role="cell">
				2
			</div>
			<div className={styles.row} role="cell">
				12 * {koef} = {Math.round(12 * koef * 10) / 10}
			</div>
		</div>
	</div>
);

export default Table;
