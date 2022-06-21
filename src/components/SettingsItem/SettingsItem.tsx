import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./SettingsItem.module.scss";

interface SettingsItemProps {
	className?: string;
	children: ReactNode;
}

const SettingsItem: FC<SettingsItemProps> = ({className, children}) => (
	<div className={classNames(className, styles.item)}>{children}</div>
);

export default SettingsItem;
