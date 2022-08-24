import React, {FC} from "react";
import classNames from "classnames";
import Link from "@components/Link/Link";
import styles from "./DeveloperItem.module.scss";

interface DeveloperItemProps {
	name: string;
	job: string;
	linkPath: string;
	className?: string;
}

const DeveloperItem: FC<DeveloperItemProps> = ({
	job,
	linkPath,
	name,
	className
}) => (
	<div className={classNames(className, styles.item)}>
		<p className={styles.job}>{job} by</p>
		<Link href={linkPath} text={name} />
	</div>
);

export default DeveloperItem;
