import {SIGNUP_ROUTE} from "@utils/constants/routes";
import AuthFormTabs from "@views/Auth/AuthFormTabs/AuthFormTabs";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";
import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import AuthFormBtns from "../AuthFormBtns/AuthFormBtns";
import styles from "./AuthForm.module.scss";

const AuthForm: FC = () => {
	const location = useLocation();
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		if (location.pathname === SIGNUP_ROUTE) {
			setIsLogin(false);
		} else {
			setIsLogin(true);
		}
	}, [location.pathname]);

	return (
		<div className={styles.form}>
			<div className={styles.content}>
				<AuthFormTabs />
				{isLogin ? (
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
