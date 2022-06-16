import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import {FC} from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./views/Header/Header";

const App: FC = () => (
	<Router>
		<div className="main-wrapper">
			<Header />
			<main>
				<AppRouter />
			</main>
		</div>
	</Router>
);

export default App;
