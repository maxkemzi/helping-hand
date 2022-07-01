import React, {FC} from "react";
import HomeSlider from "@views/Home/HomeSlider/HomeSlider";
import {slides} from "@data/index";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => (
	<div className={styles.page}>
		<HomeSlider slides={slides} />
	</div>
);

export default HomePage;
