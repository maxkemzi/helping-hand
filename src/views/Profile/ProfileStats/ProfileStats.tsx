import React, {FC, useState} from "react";
import StatItem from "@components/StatItem/StatItem";
import classNames from "classnames";
import {IoGrid, IoList} from "react-icons/io5";
import {getProfileStatistics} from "@store/profile/profile.selectors";
import styles from "./ProfileStats.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const ProfileStats: FC = () => {
	const statistics = useAppSelector(getProfileStatistics);
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
				<StatItem
					title="Коментарів"
					value={statistics.commentCount}
					size="big"
				/>
				<StatItem title="Завдань" value={statistics.taskCount} size="big" />
			</div>
		</>
	);
};

export default ProfileStats;
