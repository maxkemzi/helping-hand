import React, {useState} from "react";
import classNames from "classnames";
import Avatar from "@components/Avatar/Avatar";
import ProfileTasks from "@views/Profile/ProfileTasks/ProfileTasks";
import {ReactComponent as VerifiedIcon} from "@images/verified.svg";
import ProfileAchieves from "@views/Profile/ProfileAchieves/ProfileAchieves";
import ProfileStats from "@views/Profile/ProfileStats/ProfileStats";
import TabList from "@components/TabList/TabList";
import TabItem from "@components/TabItem/TabItem";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.page}>
			<div className={classNames(styles.container, "container")}>
				<div className={styles.header}>
					<Avatar
						className={styles.avatar}
						imagePath=""
						width={150}
						height={150}
						fallbackVariant="lighter"
					/>
					<div className={styles.user}>
						<div className={styles.name}>
							<h3 className={styles.username}>Max Kemzi</h3>
							<VerifiedIcon />
						</div>
						<p className={styles.description}>sdfdsfsdfds</p>
						<p className={styles.rank}>Expert</p>
					</div>
				</div>
				<TabList className={styles.tabs} activeTab={activeTab}>
					<TabItem
						text="Завдання"
						onClick={() => setActiveTab(0)}
						isActive={activeTab === 0}
					/>
					<TabItem
						text="Досягнення"
						onClick={() => setActiveTab(1)}
						isActive={activeTab === 1}
					/>
					<TabItem
						text="Статистика"
						onClick={() => setActiveTab(2)}
						isActive={activeTab === 2}
					/>
				</TabList>
				<div className={styles.content}>
					{activeTab === 0 && <ProfileTasks />}
					{activeTab === 1 && <ProfileAchieves />}
					{activeTab === 2 && <ProfileStats />}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
