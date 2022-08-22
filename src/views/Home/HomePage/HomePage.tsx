import React, {FC} from "react";
import HomeSlider from "@views/Home/HomeSlider/HomeSlider";
import {slides} from "@data/index";
import MainLayout from "@components/MainLayout/MainLayout";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => (
	<MainLayout>
		<div className={styles.page}>
			<HomeSlider slides={slides} />
		</div>
	</MainLayout>
);

export default HomePage;
