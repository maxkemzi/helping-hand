import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./SeparatorItem.module.scss";

interface SeparatorItemProps {
	className?: string;
	children: ReactNode;
}

const SeparatorItem: FC<SeparatorItemProps> = ({className, children}) => (
	<div className={classNames(className, styles.item)}>{children}</div>
);

export default SeparatorItem;
