import React, {FC} from "react";
import HomeBackground from "@images/home-bg.svg";
import {useNavigate} from "react-router-dom";
import HomeSlider from "@views/Home/HomeSlider/HomeSlider";
import {AUTH_ROUTE} from "@utils/constants/routes";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
	const navigate = useNavigate();

	const slides = [
		{
			title: "Helping hand",
			text: (
				<p>
					Сервіс, який дасть відповідь на всі ваші питання. <br /> Не віриш?
					Спробуй сам!
				</p>
			),
			buttonText: "Почати",
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		},
		{
			title: "Ментори з досвідом",
			text: (
				<p>
					Нашим сервісом користуются найрозумніші ментори, <br /> які мають
					великикий досвід.
				</p>
			),
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		},
		{
			title: "Перевірка відповідей",
			text: (
				<p>
					За для того, щоб ви отримали найякісніше рішення, <br /> відповідь
					ментора повинна бути схвалена ще трьома менторами.
				</p>
			),
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		}
	];

	return (
		<div
			className={styles.page}
			style={{backgroundImage: `url(${HomeBackground})`}}
		>
			<HomeSlider slides={slides} />
		</div>
	);
};

export default HomePage;
