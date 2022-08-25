import React from "react";
import styles from "@views/Footer/Footer.module.scss";
import NavbarItem from "@components/NavbarItem/NavbarItem";
import Navbar, {NavbarVariant} from "@components/Navbar/Navbar";
import {IoMail, IoPaperPlane} from "react-icons/io5";
import ScreenSizes from "@utils/constants/screenSizes";
import useWindowSize from "../../../hooks/useWindowSize";

const FooterSocialList = () => {
	const {width} = useWindowSize();
	let navbarVariant: NavbarVariant = "column";

	if (width <= ScreenSizes.TabletWidth) {
		navbarVariant = "row";
	}

	if (width <= ScreenSizes.PhoneWidth) {
		navbarVariant = "column";
	}

	return (
		<Navbar variant={navbarVariant}>
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
};

export default FooterSocialList;
