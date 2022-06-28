import AuthForm from "@views/Auth/AuthForm/AuthForm";
import React, {FC} from "react";
import styles from "./AuthPage.module.scss";
import HumanIcon from "../../../icons/HumanIcon/HumanIcon";

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
