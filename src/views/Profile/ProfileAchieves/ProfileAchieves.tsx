import React from "react";
import StarIcon from "@images/star.svg";
import AchieveItem from "@components/AchieveItem/AchieveItem";
import {IAchieve} from "@customTypes/index";
import styles from "./ProfileAchieves.module.scss";
import data from "../../../mock.json";

const ProfileAchieves = () => (
	<div className={styles.achieves}>
		{data.achieves.map((achieve: IAchieve) => (
			<AchieveItem key={achieve.id} {...achieve} icon={StarIcon} />
		))}
	</div>
);

export default ProfileAchieves;
