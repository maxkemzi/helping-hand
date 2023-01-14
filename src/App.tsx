import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import React, {FC, useEffect, useState} from "react";
import {GreenTheme} from "@utils/constants/themes";
import AppRouter from "./components/AppRouter/AppRouter";
import useTheme from "./hooks/useTheme";
import useAppDispatch from "./hooks/useAppDispatch";
import AuthService from "./services/auth/auth.service";
import IntegrationsService from "./services/integrations/integrations.service";
import {ModalProvider} from "./contexts/ModalContext";

const App: FC = () => {
	const dispatch = useAppDispatch();
	const [isFetching, setIsFetching] = useState(true);
	useTheme(GreenTheme);

	// Checking for authorization
	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			const initialize = async () => {
				setIsFetching(true);
				try {
					await dispatch(AuthService.check());
					await dispatch(IntegrationsService.get());
				} catch (e) {
					console.log(e);
				} finally {
					setIsFetching(false);
				}
			};
			initialize();
		} else {
			setIsFetching(false);
		}
	}, [dispatch]);

	if (isFetching) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<ModalProvider>
				<AppRouter />
			</ModalProvider>
		</Router>
	);
};

export default App;
