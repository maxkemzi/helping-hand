import React, {FC} from "react";
import HomeSlider from "@views/Home/HomeSlider/HomeSlider";
import {slides} from "@data/index";
import MainLayout from "@components/MainLayout/MainLayout";
import classNames from "classnames";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => (
	<MainLayout>
		<div className={classNames(styles.container, "container")}>
			<div className={styles.page}>
				<HomeSlider slides={slides} />
			</div>
		</div>
	</MainLayout>
);

export default HomePage;
