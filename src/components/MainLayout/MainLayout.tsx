import React, {FC, ReactNode} from "react";
import Header from "@views/Header/Header";
import Footer from "@views/Footer/Footer";

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => (
	<div className="main-wrapper">
		<Header hasBorder />
		<main className="main">{children}</main>
		<Footer />
	</div>
);

export default MainLayout;
