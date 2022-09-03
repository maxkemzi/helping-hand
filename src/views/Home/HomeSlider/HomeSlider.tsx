import React, {FC, useEffect, useState} from "react";
import styles from "@views/Home/HomePage/HomePage.module.scss";
import classNames from "classnames";
import Button from "@components/Button/Button";
import {NavLink} from "react-router-dom";
import Typography from "@components/Typography/Typography";
import HomeSliderDots from "@views/Home/HomeSliderDots/HomeSliderDots";
import {Slide} from "@customTypes/components";
import {useTranslation} from "react-i18next";

interface HomeSliderProps {
	slides: Slide[];
}

const HomeSlider: FC<HomeSliderProps> = ({slides}) => {
	const [index, setIndex] = useState(0);
	const {t} = useTranslation();

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
				const {id, title, text, buttonText, buttonPath} = slide;
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
					<div
						key={id}
						className={classNames(styles.content, styles[position])}
					>
						<Typography className={styles.title} variant="h1" component="h1">
							{title}
						</Typography>
						<Typography
							className={styles.text}
							variant="subtitle1"
							component="p"
						>
							{t(text)}
						</Typography>
						{buttonText && buttonPath && (
							<NavLink to={buttonPath}>
								<Button size="big" text={t(buttonText)} />
							</NavLink>
						)}
					</div>
				);
			})}
			<HomeSliderDots slides={slides} index={index} setIndex={setIndex} />
		</>
	);
};

export default HomeSlider;
