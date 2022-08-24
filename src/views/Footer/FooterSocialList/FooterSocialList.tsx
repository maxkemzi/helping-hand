import React from "react";
import styles from "@views/Footer/Footer.module.scss";
import NavbarItem from "@components/NavbarItem/NavbarItem";
import Navbar from "@components/Navbar/Navbar";
import {IoMail, IoPaperPlane} from "react-icons/io5";

const FooterSocialList = () => (
	<Navbar variant="column">
		<li className={styles.item}>
			<IoMail className={styles.icon} />
			<NavbarItem path="" text="email@gmail.com" />
		</li>
		<li className={styles.item}>
			<IoPaperPlane className={styles.icon} />
			<NavbarItem path="" text="telegram.com" />
		</li>
	</Navbar>
);

export default FooterSocialList;
