import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./views/Header/Header";
import {RootState} from "./store";

const App: FC = () => {
	const accentColor = useSelector(
		(state: RootState) => state.appState.accentColor
	);

	useEffect(() => {
		document.documentElement.style.setProperty(
			"--color-accent",
			localStorage.getItem("accentColor")
		);
		if (accentColor === "#009AD2") {
			document.documentElement.style.setProperty(
				"--color-accent-darker",
				"#0087b8"
			);
		} else if (accentColor === "#00D4C3") {
			document.documentElement.style.setProperty(
				"--color-accent-darker",
				"#00bbac"
			);
		}
	}, [accentColor]);

	return (
		<Router>
			<div className="main-wrapper">
				<Header />
				<main>
					<AppRouter />
				</main>
			</div>
		</Router>
	);
};

export default App;
