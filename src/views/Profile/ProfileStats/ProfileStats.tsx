import React, {FC, useState} from "react";
import StatItem from "@components/StatItem/StatItem";
import classNames from "classnames";
import {IoGrid, IoList} from "react-icons/io5";
import data from "../../../mock.json";
import styles from "./ProfileStats.module.scss";

const ProfileStats: FC = () => {
	const [isList, setIsList] = useState(false);

	const handleGrid = () => setIsList(false);

	const handleList = () => setIsList(true);

	return (
		<>
			<div className={styles.header}>
				<div className={styles.buttons}>
					<button
						onClick={handleList}
						className={classNames(styles.button, {[styles.active]: isList})}
						type="button"
					>
						<IoList size={24} className={styles.icon} />
					</button>
					<button
						onClick={handleGrid}
						className={classNames(styles.button, {[styles.active]: !isList})}
						type="button"
					>
						<IoGrid size={24} className={styles.icon} />
					</button>
				</div>
			</div>
			<div
				className={classNames("wrapper", {
					[styles.grid]: !isList,
					[styles.list]: isList
				})}
			>
				{data.stats.map(stat => (
					<StatItem size="big" key={stat.id} {...stat} />
				))}
			</div>
		</>
	);
};

export default ProfileStats;
