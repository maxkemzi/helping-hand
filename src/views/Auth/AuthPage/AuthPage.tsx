import AuthForm from "@views/Auth/AuthForm/AuthForm";
import React, {FC} from "react";
import HumanIcon from "@icons/HumanIcon/HumanIcon";
import MainLayout from "@components/MainLayout/MainLayout";
import styles from "./AuthPage.module.scss";

const AuthPage: FC = () => (
	<MainLayout>
		<div className="page">
			<div className="container">
				<div className={styles.inner}>
					<AuthForm />
					<HumanIcon />
				</div>
			</div>
		</div>
	</MainLayout>
);

export default AuthPage;
