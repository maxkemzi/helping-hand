import React from "react";
import {LOGIN_ROUTE} from "@utils/constants/routes";
import {ISlide} from "@customTypes/index";

const slides: ISlide[] = [
	{
		id: 1,
		title: "Helping hand",
		text: (
			<>
				Сервіс, який дасть відповідь на всі ваші питання. <br /> Не віриш?
				Спробуй сам!
			</>
		),
		buttonText: "Почати",
		buttonPath: LOGIN_ROUTE
	},
	{
		id: 2,
		title: "Ментори з досвідом",
		text: (
			<>
				Нашим сервісом користуются найрозумніші ментори, <br /> які мають
				великикий досвід.
			</>
		)
	},
	{
		id: 3,
		title: "Перевірка відповідей",
		text: (
			<>
				За для того, щоб ви отримали найякісніше рішення, <br /> відповідь
				ментора повинна бути схвалена ще трьома менторами.
			</>
		)
	}
];

export default slides;
