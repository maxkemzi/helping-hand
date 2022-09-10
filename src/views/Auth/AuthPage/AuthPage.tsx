import AuthForm from "@views/Auth/AuthForm/AuthForm";
import React, {FC} from "react";
import HumanIcon from "@icons/HumanIcon/HumanIcon";
import MainLayout from "@components/MainLayout/MainLayout";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./AuthPage.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const AuthPage: FC = () => {
	const {width} = useWindowSize();
	return (
		<MainLayout>
			<div className="page">
				<div className="container">
					<div className={styles.inner}>
						<AuthForm />
						{width > ScreenSizes.SmDesktopWidth && (
							<HumanIcon className={styles.image} />
						)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default AuthPage;
