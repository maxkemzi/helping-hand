import SocialButton from "@components/SocialButton/SocialButton";
import {ReactComponent as GoogleIcon} from "@images/google.svg";
import {ReactComponent as TelegramIcon} from "@images/telegram.svg";
import {memo} from "react";
import styles from "./AuthFormBtns.module.scss";

const AuthFormBtns = memo(() => (
	<div className={styles.btns}>
		<SocialButton
			className={styles.btn}
			color="#ea4335"
			text="Google"
			icon={GoogleIcon}
		/>
		<SocialButton
			className={styles.btn}
			color="#0088cc"
			text="Telegram"
			icon={TelegramIcon}
		/>
	</div>
));

export default AuthFormBtns;
