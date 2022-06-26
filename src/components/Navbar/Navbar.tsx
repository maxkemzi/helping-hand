import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Navbar.module.scss";

type Variant = "row" | "column";

interface NavbarProps {
	children: ReactNode;
	className?: string;
	variant?: Variant;
}

const Navbar: FC<NavbarProps> = ({children, variant = "row", className}) => (
	<nav className={className}>
		<ul className={classNames(styles.list, styles[variant])}>{children}</ul>
	</nav>
);

export default Navbar;
