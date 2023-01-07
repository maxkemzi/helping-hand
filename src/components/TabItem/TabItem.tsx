import React, {FC, memo, MouseEventHandler, useEffect, useRef} from "react";
import classNames from "classnames";
import {Link, useLocation} from "react-router-dom";
import styles from "./TabItem.module.scss";

type Variant = "horizontal" | "vertical";

export interface TabItemLayout {
	offsetWidth: number;
	offsetHeight: number;
	offsetTop: number;
	offsetLeft: number;
}

interface TabItemProps {
	text: string;
	onClick?: MouseEventHandler;
	variant?: Variant;
	className?: string;
	to: string;
	onActiveLayout?: (layout: TabItemLayout) => void;
}

const TabItem: FC<TabItemProps> = memo(
	({text, onClick, variant = "horizontal", className, to, onActiveLayout}) => {
		const location = useLocation();
		const ref = useRef(null);
		const isActive = location.pathname === to;

		useEffect(() => {
			if (isActive && ref.current) {
				onActiveLayout?.({
					offsetWidth: ref.current.offsetWidth,
					offsetLeft: ref.current.offsetLeft,
					offsetTop: ref.current.offsetTop,
					offsetHeight: ref.current.offsetHeight
				});
			}
		}, [isActive, onActiveLayout, ref]);

		return (
			<Link
				to={to}
				onClick={onClick}
				className={classNames(className, styles.tab, styles[variant], {
					[styles.active]: isActive
				})}
			>
				<span ref={ref}>{text}</span>
			</Link>
		);
	}
);
export default TabItem;
