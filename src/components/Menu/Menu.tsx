import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./Menu.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

interface MenuProps {
	className?: string;
	isOpen: boolean;
	children: ReactNode;
}

const Menu: FC<MenuProps> = ({className, isOpen, children}) => {
	const {width} = useWindowSize();
	return (
		<div
			className={classNames(className, styles.menu, {
				[styles.open]: isOpen,
				[styles["sm-tablet"]]: width <= ScreenSizes.SmTabletWidth,
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
			{children}
		</div>
	);
};

export default Menu;
