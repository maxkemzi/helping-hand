import AuthFormTabs from "@views/Auth/AuthFormTabs/AuthFormTabs";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";
import React, {FC, useState} from "react";
import AuthFormBtns from "../AuthFormBtns/AuthFormBtns";
import styles from "./AuthForm.module.scss";

const AuthForm: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.form}>
			<div className={styles.content}>
				<AuthFormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				{activeTab === 0 ? (
					<AuthLoginForm className={styles["login-form"]} />
				) : (
					<AuthSignupForm className={styles["login-form"]} />
				)}
				<p className={styles.separator}>або</p>
				<AuthFormBtns />
			</div>
		</div>
	);
};

export default AuthForm;
