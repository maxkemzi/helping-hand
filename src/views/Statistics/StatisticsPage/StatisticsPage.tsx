import React from "react";
import classNames from "classnames";
import Button from "@components/Button/Button";
import MainLayout from "@components/MainLayout/MainLayout";
import {getIsAppInitializing} from "@store/app/app.selectors";
import StatisticsFilters from "@views/Statistics/StatisticsFilters/StatisticsFilters";
import StatisticsSearchBar from "@views/Statistics/StatisticsSearchBar/StatisticsSearchBar";
import Table from "@components/Table/Table";
import styles from "./StatisticsPage.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const StatisticsPage = () => {
	const isInitializing = useAppSelector(getIsAppInitializing);
	return (
		<MainLayout>
			<div className="page">
				<div className="container">
					<div className={styles.inner}>
						<aside className={classNames("wrapper", styles.sidebar)}>
							<StatisticsFilters />
						</aside>
						<div className={styles.header}>
							<div className={styles.panel}>
								<StatisticsSearchBar isFetching={false} limit={5} />
								<Button className={styles.btn} text="Завантажити" />
							</div>
						</div>
						<div className={classNames("wrapper", styles.wrapper)}>
							<Table />
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default StatisticsPage;
