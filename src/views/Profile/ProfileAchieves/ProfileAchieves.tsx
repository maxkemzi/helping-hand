import React from "react";
import AchieveItem from "@components/AchieveItem/AchieveItem";
import classNames from "classnames";
import Achieve from "@customTypes/entities/achieve";
import {IoRibbon} from "react-icons/io5";
import styles from "./ProfileAchieves.module.scss";
import data from "../../../mock.json";

const ProfileAchieves = () => (
	<div className={classNames("wrapper", styles.achieves)}>
		{data.achieves.map((achieve: Achieve) => (
			<AchieveItem key={achieve.id} {...achieve} icon={IoRibbon} />
		))}
	</div>
);

export default ProfileAchieves;
