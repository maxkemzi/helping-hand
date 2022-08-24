import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import AuthTabs from "@views/Auth/AuthTabs/AuthTabs";
import Divider from "@components/Divider/Divider";
import AuthFormBtns from "../AuthFormBtns/AuthFormBtns";
import styles from "./AuthForm.module.scss";

const AuthForm: FC = () => (
	<div className={styles.form}>
		<div className={styles.content}>
			<AuthTabs />
			<div className={styles["form-content"]}>
				<Outlet />
			</div>
			<Divider className={styles.divider}>або</Divider>
			<AuthFormBtns />
		</div>
	</div>
);

export default AuthForm;
