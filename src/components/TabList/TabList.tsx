import React, {FC, ReactNode, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useLocation} from "react-router-dom";
import ANIMATION_DURATION from "@utils/constants/animations";
import styles from "./TabList.module.scss";

type Variant = "horizontal" | "vertical";

interface TabListProps {
	children: ReactNode;
	variant?: Variant;
	className?: string;
	adaptiveLineSizing?: boolean;
}

const TabList: FC<TabListProps> = ({
	children,
	variant = "horizontal",
	className,
	adaptiveLineSizing
}) => {
	const [isCalculating, setIsCalculating] = useState(true);
	const parentRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);
	const location = useLocation();

	// Wait till line transition ends (width and position transition)
	useEffect(() => {
		const timeout = setTimeout(
			() => setIsCalculating(false),
			ANIMATION_DURATION
		);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (parentRef.current && lineRef.current) {
			// Get active child out of the tab list
			const child = parentRef.current.querySelector(
				`a[href="${location.pathname}"]`
			) as HTMLElement;

			// Line position calculations for a horizontal/vertical list
			if (variant === "horizontal") {
				const tabOffsetLeft = child.querySelector("span").offsetLeft;
				const tabWidth = child.querySelector("span").offsetWidth;

				lineRef.current.style.left = `${tabOffsetLeft + tabWidth / 2}px`;
				lineRef.current.style.transform = "translateX(-50%)";

				if (adaptiveLineSizing) {
					lineRef.current.style.width = `${tabWidth}px`;
				}
			} else {
				const tabOffsetTop = child.querySelector("span").offsetTop;
				const tabHeight = child.querySelector("span").offsetHeight;

				lineRef.current.style.top = `${tabOffsetTop + tabHeight / 2}px`;
				lineRef.current.style.transform = "translateY(-50%)";

				if (adaptiveLineSizing) {
					lineRef.current.style.height = `${tabHeight}px`;
				}
			}
		}
	}, [adaptiveLineSizing, location.pathname, variant]);

	return (
		<div
			className={classNames(className, styles.tabs, styles[variant])}
			ref={parentRef}
		>
			<div className={styles.list}>{children}</div>
			<div
				ref={lineRef}
				className={classNames(styles.line, {
					[styles.visible]: !isCalculating
				})}
			/>
		</div>
	);
};

export default TabList;
