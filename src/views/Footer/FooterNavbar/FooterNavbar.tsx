import React, {FC} from "react";
import styles from "@views/Footer/Footer.module.scss";
import NavbarItem from "@components/NavbarItem/NavbarItem";
import Navbar from "@components/Navbar/Navbar";

const FooterNavbar: FC = () => (
	<Navbar className={styles.nav} variant="column">
		<li className={styles.item}>
			<NavbarItem path="" text="Про нас" />
		</li>
		<li className={styles.item}>
			<NavbarItem path="" text="Купити нам каву" />
		</li>
	</Navbar>
);

export default FooterNavbar;
