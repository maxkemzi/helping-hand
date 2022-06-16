import React, {FC, useState} from "react";
import StatItem from "@components/StatItem/StatItem";
import classNames from "classnames";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/Dropdown/DropdownOption/DropdownOption";
import data from "../../../mock.json";
import styles from "./ProfileStats.module.scss";

const ProfileStats: FC = () => {
	const grid = "Сітка";
	const list = "Список";
	const [value, setValue] = useState(grid);
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (val: string) => {
		setValue(val);
		setIsVisible(false);
	};

	return (
		<div>
			<div className={styles.header}>
				<Dropdown
					isVisible={isVisible}
					setIsVisible={setIsVisible}
					value={value}
					variant="big"
				>
					<DropdownOption
						value={grid}
						isActive={value === grid}
						onClick={handleClick}
					/>
					<DropdownOption
						value={list}
						isActive={value === list}
						onClick={handleClick}
					/>
				</Dropdown>
			</div>
			<div
				className={classNames(
					{
						[styles.grid]: value === grid,
						[styles.list]: value === list
					},
					"wrapper"
				)}
			>
				{data.stats.map(stat => (
					<StatItem key={stat.id} {...stat} />
				))}
			</div>
		</div>
	);
};

export default ProfileStats;
