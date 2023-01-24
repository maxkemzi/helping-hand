import React, {useState, ChangeEvent} from "react";
import classNames from "classnames";
import Button from "@components/Button/Button";
import MainLayout from "@components/MainLayout/MainLayout";
import {getIsAppInitializing} from "@store/app/app.selectors";
import StatisticsFilters from "@views/Statistics/StatisticsFilters/StatisticsFilters";
import StatisticsSearchBar from "@views/Statistics/StatisticsSearchBar/StatisticsSearchBar";
import Table from "@components/Table/Table";
import {IoDownloadOutline} from "react-icons/io5";
import Input from "@components/Input/Input";
import styles from "./StatisticsPage.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const StatisticsPage = () => {
	const [koef, setKoef] = useState(1);
	const isInitializing = useAppSelector(getIsAppInitializing);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setKoef(Number(e.target.value));

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
								<div className={styles["panel-left"]}>
									<StatisticsSearchBar isFetching={false} limit={5} />
									<Input
										onChange={handleChange}
										value={koef}
										placeholder="Коефіцієнт"
										type="number"
									/>
								</div>
								<Button
									endIcon={IoDownloadOutline}
									className={styles.btn}
									text="XLS"
								/>
							</div>
						</div>
						<div className={classNames("wrapper", styles.wrapper)}>
							<Table koef={koef} />
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default StatisticsPage;
