import React, {memo} from "react";
import Button from "@components/Button/Button";
import {IoLogoGoogle, IoPaperPlane} from "react-icons/io5";
import styles from "./AuthFormBtns.module.scss";

const AuthFormBtns = memo(() => (
	<div className={styles.btns}>
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
));

export default AuthFormBtns;
