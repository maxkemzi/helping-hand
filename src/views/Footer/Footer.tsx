import React from "react";
import Logo from "@components/Logo/Logo";
import {useLocation} from "react-router-dom";
import {ROUTES_WITHOUT_FOOTER} from "@utils/constants/routes";
import FooterNavbar from "@views/Footer/FooterNavbar/FooterNavbar";
import FooterSocialNavbar from "@views/Footer/FooterSocialNavbar/FooterSocialNavbar";
import FooterDevList from "@views/Footer/FooterDevList/FooterDevList";
import styles from "./Footer.module.scss";

const Footer = () => {
	const location = useLocation();

	if (ROUTES_WITHOUT_FOOTER.includes(location.pathname)) {
		return null;
	}

	return (
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
};

export default Footer;
