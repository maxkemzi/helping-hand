import React from "react";
import {Outlet} from "react-router-dom";

const IntegrationPage = () => (
	<div className="page">
		<div className="container">
			<Outlet />
		</div>
	</div>
);

export default IntegrationPage;
