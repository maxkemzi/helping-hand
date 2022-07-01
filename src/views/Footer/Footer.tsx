import React from "react";
import Logo from "@components/Logo/Logo";
import FooterNavbar from "@views/Footer/FooterNavbar/FooterNavbar";
import FooterSocialNavbar from "@views/Footer/FooterSocialNavbar/FooterSocialNavbar";
import FooterDevList from "@views/Footer/FooterDevList/FooterDevList";
import styles from "./Footer.module.scss";

const Footer = () => (
	<footer className={styles.footer}>
		<div className="container">
			<div className={styles.inner}>
				<div className={styles.row}>
					<Logo className={styles.logo} />
					<FooterDevList />
				</div>
				<div className={styles.row}>
					<FooterNavbar />
					<FooterSocialNavbar />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
