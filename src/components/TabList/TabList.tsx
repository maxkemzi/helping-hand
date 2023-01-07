import React, {
	FC,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import classNames from "classnames";
import ANIMATION_DURATION from "@utils/constants/animations";
import {TabItemLayout} from "@components/TabItem/TabItem";
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
	const [lineSize, setLineSize] = useState(0);
	const [lineOffset, setLineOffset] = useState(0);
	const [isCalculating, setIsCalculating] = useState(true);
	const lineRef = useRef<HTMLDivElement>(null);

	// Wait till line transition ends (width and position transition)
	useEffect(() => {
		const timeout = setTimeout(
			() => setIsCalculating(false),
			ANIMATION_DURATION
		);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (lineRef.current) {
			// Line position calculations for a horizontal/vertical list
			if (variant === "vertical") {
				lineRef.current.style.transform = `translateY(${lineOffset}px)`;

				if (adaptiveLineSizing) {
					lineRef.current.style.height = `${lineSize}px`;
				}
			} else {
				lineRef.current.style.transform = `translateX(${lineOffset}px)`;

				if (adaptiveLineSizing) {
					lineRef.current.style.width = `${lineSize}px`;
				}
			}
		}
	}, [adaptiveLineSizing, lineOffset, lineSize, variant]);

	const handleActiveLayout = useCallback(
		({offsetWidth, offsetLeft, offsetTop, offsetHeight}: TabItemLayout) => {
			setLineSize(variant === "vertical" ? offsetHeight : offsetWidth);
			setLineOffset(variant === "vertical" ? offsetTop : offsetLeft);
		},
		[variant]
	);

	return (
		<div className={classNames(className, styles.tabs, styles[variant])}>
			<div className={styles.list}>
				{React.Children.map(children, child => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, {
							onActiveLayout: handleActiveLayout
						});
					}
					return false;
				})}
			</div>
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
