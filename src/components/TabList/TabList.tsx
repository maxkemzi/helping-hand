import React, {FC, ReactNode, useEffect, useRef} from "react";
import classNames from "classnames";
import styles from "./TabList.module.scss";

type Variant = "horizontal" | "vertical";

interface TabListProps {
	children: ReactNode;
	activeTab: number;
	variant?: Variant;
	className?: string;
}

const TabList: FC<TabListProps> = ({
	children,
	activeTab,
	variant = "horizontal",
	className
}) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (parentRef.current && lineRef.current) {
			const child = parentRef.current.children[activeTab]
				.children[0] as HTMLElement;

			if (variant === "horizontal") {
				const tabOffsetLeft = child.offsetLeft;
				const tabWidth = child.offsetWidth;
				lineRef.current.style.left = `${tabOffsetLeft + tabWidth / 2}px`;
			} else {
				const tabOffsetTop = child.offsetTop;
				const tabHeight = child.offsetHeight;
				lineRef.current.style.top = `${tabOffsetTop + tabHeight / 2}px`;
			}
		}
	}, [activeTab, variant]);

	return (
		<div
			ref={parentRef}
			className={classNames(className, styles.tabs, styles[variant])}
		>
			{children}
			<div ref={lineRef} className={styles.line} />
		</div>
	);
};

export default TabList;
