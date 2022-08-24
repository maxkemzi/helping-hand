import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Divider.module.scss";

interface DividerProps {
	children?: ReactNode;
	className?: string;
}

const Divider: FC<DividerProps> = ({children, className}) => {
	const classes = classNames(className, styles.divider);

	if (children) {
		return (
			<div className={classNames(classes, styles["with-text"])}>
				<span className={styles.line} />
				<div className={styles.content}>{children}</div>
				<span className={styles.line} />
			</div>
		);
	}

	return <div className={classes} />;
};

export default Divider;
