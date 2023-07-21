import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import MainLayout from "@components/MainLayout/MainLayout";
import Table from "@components/Table/Table";
import StatisticsFilters from "@views/Statistics/StatisticsFilters/StatisticsFilters";
import StatisticsSearchBar from "@views/Statistics/StatisticsSearchBar/StatisticsSearchBar";
import classNames from "classnames";
import React, {ChangeEvent, useState} from "react";
import {IoDownloadOutline} from "react-icons/io5";
import styles from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
	const [koef, setKoef] = useState(1);

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
									<StatisticsSearchBar isFetching={false} />
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
