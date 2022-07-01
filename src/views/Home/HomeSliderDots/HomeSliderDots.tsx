import React, {Dispatch, FC, SetStateAction} from "react";
import DotItem from "@components/DotItem/DotItem";
import {ISlide} from "@customTypes/index";
import styles from "./HomeSliderDots.module.scss";

interface HomeSliderDotsProps {
	slides: ISlide[];
	setIndex: Dispatch<SetStateAction<number>>;
	index: number;
}

const HomeSliderDots: FC<HomeSliderDotsProps> = ({slides, setIndex, index}) => (
	<div className={styles.dots}>
		{slides.map((slide, slideIndex) => (
			<DotItem
				key={slide.id}
				onClick={() => setIndex(slideIndex)}
				isActive={index === slideIndex}
			/>
		))}
	</div>
);

export default HomeSliderDots;
