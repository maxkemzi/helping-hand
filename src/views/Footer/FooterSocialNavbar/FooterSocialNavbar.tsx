import React from "react";
import styles from "@views/Footer/Footer.module.scss";
import NavbarItem from "@components/NavbarItem/NavbarItem";
import Navbar from "@components/Navbar/Navbar";

const FooterSocialNavbar = () => (
	<Navbar variant="column">
		<li className={styles.item}>
			<NavbarItem path="" text="email@gmail.com" />
		</li>
		<li className={styles.item}>
			<NavbarItem path="" text="telegram.com" />
		</li>
	</Navbar>
);

export default FooterSocialNavbar;
