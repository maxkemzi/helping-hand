import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import React, {FC} from "react";
import Footer from "@views/Footer/Footer";
import {GreenTheme} from "@utils/constants/themes";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./views/Header/Header";
import useTheme from "./hooks/useTheme";

const App: FC = () => {
	useTheme(GreenTheme);

	return (
		<Router>
			<div className="main-wrapper">
				<Header />
				<main className="main">
					<AppRouter />
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
