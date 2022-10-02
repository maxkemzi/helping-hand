import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import React, {FC, useEffect} from "react";
import {GreenTheme} from "@utils/constants/themes";
import {setIsFetching} from "@store/auth/auth.slice";
import {getIsAuthFetching} from "@store/auth/auth.selectors";
import {getIsIntegrationsFetching} from "@store/integrations/integrations.selectors";
import AppRouter from "./components/AppRouter/AppRouter";
import useTheme from "./hooks/useTheme";
import useAppDispatch from "./hooks/useAppDispatch";
import AuthService from "./services/auth/auth.service";
import useAppSelector from "./hooks/useAppSelector";
import IntegrationsService from "./services/integrations/integrations.service";

const App: FC = () => {
	const dispatch = useAppDispatch();
	const isFetching = useAppSelector(getIsAuthFetching);
	const isIntegrationsFetching = useAppSelector(getIsIntegrationsFetching);
	useTheme(GreenTheme);

	// Checking for authorization
	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			const initialize = async () => {
				await dispatch(AuthService.check());
				dispatch(IntegrationsService.get());
			};
			initialize();
		} else {
			dispatch(setIsFetching(false));
		}
	}, [dispatch]);

	if (isFetching || isIntegrationsFetching) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<AppRouter />
		</Router>
	);
};

export default App;
