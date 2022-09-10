import React, {memo} from "react";
import Button from "@components/Button/Button";
import {IoLogoGoogle, IoPaperPlane} from "react-icons/io5";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import styles from "./AuthFormBtns.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const AuthFormBtns = memo(() => {
	const {width} = useWindowSize();
	return (
		<div
			className={classNames(styles.btns, {
				[styles.phone]: width <= ScreenSizes.PhoneWidth
			})}
		>
			<Button
				className={styles.btn}
				text="Google"
				variant="outline"
				startIcon={IoLogoGoogle}
			/>
			<Button
				className={styles.btn}
				text="Telegram"
				variant="outline"
				startIcon={IoPaperPlane}
			/>
		</div>
	);
});

export default AuthFormBtns;
