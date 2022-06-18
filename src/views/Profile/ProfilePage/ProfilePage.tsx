import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import Avatar from "@components/Avatar/Avatar";
import ProfileTasks from "@views/Profile/ProfileTasks/ProfileTasks";
import {ReactComponent as VerifiedIcon} from "@images/verified.svg";
import ProfileAchieves from "@views/Profile/ProfileAchieves/ProfileAchieves";
import ProfileStats from "@views/Profile/ProfileStats/ProfileStats";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState(0);
	const parentRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (parentRef.current && lineRef.current) {
			const child = parentRef.current.children[activeTab]
				.children[0] as HTMLElement;
			const tabOffsetLeft = child.offsetLeft;
			const tabWidth = child.offsetWidth;

			lineRef.current.style.left = `${tabOffsetLeft + tabWidth / 2}px`;
		}
	}, [activeTab]);

	return (
		<div className={styles.page}>
			<div className={classNames(styles.container, "container")}>
				<div className={styles.header}>
					<Avatar
						className={styles.avatar}
						imagePath=""
						width={150}
						height={150}
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
				<div className={styles.tabs} ref={parentRef}>
					<button
						onClick={() => setActiveTab(0)}
						type="button"
						className={classNames(styles.tab, {
							[styles.active]: activeTab === 0
						})}
					>
						<span>Завдання</span>
					</button>
					<button
						onClick={() => setActiveTab(1)}
						type="button"
						className={classNames(styles.tab, {
							[styles.active]: activeTab === 1
						})}
					>
						<span>Досягнення</span>
					</button>
					<button
						onClick={() => setActiveTab(2)}
						type="button"
						className={classNames(styles.tab, {
							[styles.active]: activeTab === 2
						})}
					>
						<span>Статистика</span>
					</button>
					<div ref={lineRef} className={styles.line} />
				</div>
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
