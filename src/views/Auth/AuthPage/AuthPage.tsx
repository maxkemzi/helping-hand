import HumanImage from "@images/human.svg";
import AuthForm from "@views/Auth/AuthForm/AuthForm";
import React, {FC} from "react";
import styles from "./AuthPage.module.scss";

const AuthPage: FC = () => (
	<div className={styles.page}>
		<div className="container">
			<div className={styles.inner}>
				<AuthForm />
				<HumanImage />
			</div>
		</div>
	</div>
);

export default AuthPage;
