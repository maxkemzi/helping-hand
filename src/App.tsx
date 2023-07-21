import {getIsAuthFetching} from "@store/auth/auth.selectors";
import {setIsFetching} from "@store/auth/auth.slice";
import {GreenTheme} from "@utils/constants/themes";
import React, {FC, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./app.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import {ModalProvider} from "./contexts/ModalContext";
import useAppDispatch from "./hooks/useAppDispatch";
import useAppSelector from "./hooks/useAppSelector";
import useTheme from "./hooks/useTheme";
import AuthService from "./services/auth/auth.service";

const App: FC = () => {
	const dispatch = useAppDispatch();
	const isFetching = useAppSelector(getIsAuthFetching);
	useTheme(GreenTheme);

	// Checking for authorization
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(AuthService.check());
		} else {
			dispatch(setIsFetching(false));
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
