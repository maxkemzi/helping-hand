import React from "react";
import {ReactComponent as StarIcon} from "@images/star.svg";
import AchieveItem from "@components/AchieveItem/AchieveItem";
import {IAchieve} from "@models/models";
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
