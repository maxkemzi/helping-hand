import React, {FC, ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {LOGIN_ROUTE} from "@utils/constants/routes";
import {getIsAuth} from "@store/auth/auth.selectors";
import useAppSelector from "../../hooks/useAppSelector";

interface PrivateRouteProps {
	children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {
	const isAuth = useAppSelector(getIsAuth);
	return isAuth ? <>{children}</> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;
