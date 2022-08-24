import React, {FC, memo, ReactNode} from "react";
import Header from "@views/Header/Header";
import Footer from "@views/Footer/Footer";

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = memo(({children}) => (
	<div className="main-wrapper">
		<div className="main-body">
			<Header hasBorder />
			<main className="main">{children}</main>
		</div>
		<Footer />
	</div>
));

export default MainLayout;
