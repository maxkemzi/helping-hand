import React, {FC} from "react";

interface NavbarProps {
	children: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({children}) => (
	<nav>
		<ul>{children}</ul>
	</nav>
);

export default Navbar;
