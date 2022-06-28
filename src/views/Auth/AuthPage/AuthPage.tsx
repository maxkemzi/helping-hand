import AuthForm from "@views/Auth/AuthForm/AuthForm";
import React, {FC} from "react";
import HumanIcon from "@icons/HumanIcon/HumanIcon";
import styles from "./AuthPage.module.scss";

const AuthPage: FC = () => (
	<div className="page">
		<div className="container">
			<div className={styles.inner}>
				<AuthForm />
				<HumanIcon />
			</div>
		</div>
	</div>
);

export default AuthPage;
