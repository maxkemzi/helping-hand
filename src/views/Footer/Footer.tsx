import React, {FC} from "react";
import Logo from "@components/Logo/Logo";
import FooterSocialList from "@views/Footer/FooterSocialList/FooterSocialList";
import FooterDeveloperList from "@views/Footer/FooterDeveloperList/FooterDeveloperList";
import classNames from "classnames";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./Footer.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({className}) => {
	const {width} = useWindowSize();
	return (
		<footer
			className={classNames(className, styles.footer, {
				[styles.tablet]: width <= ScreenSizes.TabletWidth,
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
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
};

export default Footer;
