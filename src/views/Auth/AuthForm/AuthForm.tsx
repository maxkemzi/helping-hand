import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import AuthTabs from "@views/Auth/AuthTabs/AuthTabs";
import Divider from "@components/Divider/Divider";
import HumanIcon from "@icons/HumanIcon/HumanIcon";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import AuthFormBtns from "../AuthFormBtns/AuthFormBtns";
import styles from "./AuthForm.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const AuthForm: FC = () => {
	const {width} = useWindowSize();
	return (
		<div
			className={classNames(styles.form, {
				[styles["sm-desktop"]]: width <= ScreenSizes.SmDesktopWidth,
				[styles.tablet]: width <= ScreenSizes.TabletWidth,
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
			<div className={styles.content}>
				<AuthTabs />
				<div className={styles["form-content"]}>
					<Outlet />
				</div>
				<Divider className={styles.divider}>або</Divider>
				<AuthFormBtns />
			</div>
			{width <= ScreenSizes.SmDesktopWidth &&
				width > ScreenSizes.TabletWidth && (
					<HumanIcon
						pantsColor="light"
						className={styles.image}
						width={200}
						height={389}
					/>
				)}
		</div>
	);
};

export default AuthForm;
