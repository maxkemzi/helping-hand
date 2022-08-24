import React, {FC} from "react";
import Logo from "@components/Logo/Logo";
import FooterSocialList from "@views/Footer/FooterSocialList/FooterSocialList";
import FooterDeveloperList from "@views/Footer/FooterDeveloperList/FooterDeveloperList";
import classNames from "classnames";
import styles from "./Footer.module.scss";

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({className}) => (
	<footer className={classNames(className, styles.footer)}>
		<div className="container">
			<div className={styles.inner}>
				<div className={styles.row}>
					<Logo className={styles.logo} />
					<FooterDeveloperList />
				</div>
				<FooterSocialList />
			</div>
		</div>
	</footer>
);

export default Footer;
