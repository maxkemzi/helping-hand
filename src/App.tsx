import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import React, {FC} from "react";
import {GreenTheme} from "@utils/constants/themes";
import AppRouter from "./components/AppRouter/AppRouter";
import useTheme from "./hooks/useTheme";

const App: FC = () => {
	useTheme(GreenTheme);

	return (
		<Router>
			<div className="main-wrapper">
				<AppRouter />
			</div>
		</Router>
	);
};

export default App;
