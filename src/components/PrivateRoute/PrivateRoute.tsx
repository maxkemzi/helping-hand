import React, {FC, ReactNode} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";
import {Navigate} from "react-router-dom";
import {LOGIN_ROUTE} from "@utils/constants/routes";

interface PrivateRouteProps {
	children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {
	const isAuth = useSelector((state: RootState) => state.authState.isAuth);
	return isAuth ? <>{children}</> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;
