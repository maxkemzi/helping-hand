import React from "react";
import TritonIcon from "@images/triton.svg";
import IntegrationAuthForm from "@views/Integration/IntegrationAuth/IntegrationAuthForm/IntegrationAuthForm";
import styles from "./IntegrationAuth.module.scss";

const IntegrationAuth = () => (
	<div className={styles.inner}>
		<div className={styles.form}>
			<TritonIcon className={styles.icon} />
			<IntegrationAuthForm />
		</div>
	</div>
);

export default IntegrationAuth;
