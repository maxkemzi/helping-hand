import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import HomeSlider from "@views/Home/HomeSlider/HomeSlider";
import {AUTH_ROUTE} from "@utils/constants/routes";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
	const navigate = useNavigate();

	const slides = [
		{
			id: "1",
			title: "Helping hand",
			text: (
				<>
					Сервіс, який дасть відповідь на всі ваші питання. <br /> Не віриш?
					Спробуй сам!
				</>
			),
			buttonText: "Почати",
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		},
		{
			id: "2",
			title: "Ментори з досвідом",
			text: (
				<>
					Нашим сервісом користуются найрозумніші ментори, <br /> які мають
					великикий досвід.
				</>
			),
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		},
		{
			id: "3",
			title: "Перевірка відповідей",
			text: (
				<>
					За для того, щоб ви отримали найякісніше рішення, <br /> відповідь
					ментора повинна бути схвалена ще трьома менторами.
				</>
			),
			onClick: () => {
				navigate(AUTH_ROUTE);
			}
		}
	];

	return (
		<div className={styles.page}>
			<HomeSlider slides={slides} />
		</div>
	);
};

export default HomePage;
