import StatItem from "@components/StatItem/StatItem";
import {getAuthUser} from "@store/auth/auth.selectors";
import {
	getIsStatisticsFetching,
	getProfileStatistics
} from "@store/profile/profile.selectors";
import classNames from "classnames";
import React, {FC, useEffect, useState} from "react";
import {IoGrid, IoList} from "react-icons/io5";
import {useParams} from "react-router-dom";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import UsersService from "../../../services/users/users.service";
import styles from "./ProfileStats.module.scss";

const ProfileStats: FC = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const user = useAppSelector(getAuthUser);
	const statistics = useAppSelector(getProfileStatistics);
	const isFetching = useAppSelector(getIsStatisticsFetching);
	const [isList, setIsList] = useState(false);
	const id = params.id || user.id;

	const handleGrid = () => setIsList(false);
	const handleList = () => setIsList(true);

	useEffect(() => {
		dispatch(UsersService.fetchStatistics(id));
	}, [dispatch, id]);

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
				{isFetching ? (
					"Loading..."
				) : (
					<>
						<StatItem
							title="Comments"
							value={statistics.commentCount}
							size="big"
						/>
						<StatItem title="Tasks" value={statistics.taskCount} size="big" />
					</>
				)}
			</div>
		</>
	);
};

export default ProfileStats;
