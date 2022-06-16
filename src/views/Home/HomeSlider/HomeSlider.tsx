import React, {FC, useEffect, useState} from "react";
import styles from "@views/Home/HomePage/HomePage.module.scss";
import classNames from "classnames";
import Button from "@components/Button/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "@utils/constants/routes";

interface HomeSliderProps {
	slides: Array<{
		title: string;
		text: string;
		buttonText?: string;
		onClick: () => void;
	}>;
}

const HomeSlider: FC<HomeSliderProps> = ({slides}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);

		return () => clearInterval(slider);
	}, [index]);

	useEffect(() => {
		const lastIndex = slides.length - 1;

		if (index < 0) {
			setIndex(lastIndex);
		}

		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, slides.length]);

	return (
		<>
			{slides.map((slide, slideIndex) => {
				const {title, text, buttonText, onClick} = slide;

				let position = "nextSlide";

				if (slideIndex === index) {
					position = "activeSlide";
				}

				if (
					slideIndex === index - 1 ||
					(index === 0 && slideIndex === slides.length - 1)
				) {
					position = "lastSlide";
				}

				return (
					<div className={classNames(styles.content, styles[position])}>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.text}>{text}</p>
						{buttonText && (
							<NavLink to={LOGIN_ROUTE}>
								<Button size="big" onClick={onClick} text={buttonText} />
							</NavLink>
						)}
					</div>
				);
			})}
			<div className={styles.dots}>
				{slides.map((slide, slideIndex) => (
					<button
						onClick={() => setIndex(slideIndex)}
						aria-label="dot"
						className={classNames(styles.dot, {
							[styles.active]: index === slideIndex
						})}
						type="button"
					/>
				))}
			</div>
		</>
	);
};

export default HomeSlider;
