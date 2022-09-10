import React, {Dispatch, FC, SetStateAction} from "react";
import DotItem from "@components/DotItem/DotItem";
import {Slide} from "@customTypes/components";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import styles from "./HomeSliderDots.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

interface HomeSliderDotsProps {
	slides: Slide[];
	setIndex: Dispatch<SetStateAction<number>>;
	index: number;
}

const HomeSliderDots: FC<HomeSliderDotsProps> = ({slides, setIndex, index}) => {
	const {width} = useWindowSize();
	return (
		<div
			className={classNames(styles.dots, {
				[styles["sm-desktop"]]: width <= ScreenSizes.SmDesktopWidth
			})}
		>
			{slides.map((slide, slideIndex) => (
				<DotItem
					key={slide.id}
					onClick={() => setIndex(slideIndex)}
					isActive={index === slideIndex}
				/>
			))}
		</div>
	);
};

export default HomeSliderDots;
