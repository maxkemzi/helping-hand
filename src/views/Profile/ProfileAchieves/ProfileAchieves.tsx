import React from "react";
import AchieveItem from "@components/AchieveItem/AchieveItem";
import {IAchieve} from "@customTypes/index";
import classNames from "classnames";
import VerifiedIcon from "@icons/VerifiedIcon/VerifiedIcon";
import styles from "./ProfileAchieves.module.scss";
import data from "../../../mock.json";

const ProfileAchieves = () => (
	<div className={classNames("wrapper", styles.achieves)}>
		{data.achieves.map((achieve: IAchieve) => (
			<AchieveItem key={achieve.id} {...achieve} icon={VerifiedIcon} />
		))}
	</div>
);

export default ProfileAchieves;
