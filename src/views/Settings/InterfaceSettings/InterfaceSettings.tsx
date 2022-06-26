import React from "react";
import SeparatorItem from "@components/SeparatorItem/SeparatorItem";
import {useDispatch, useSelector} from "react-redux";
import {AccentColor} from "@customTypes/index";
import ColorButton from "@components/ColorButton/ColorButton";
import {RootState} from "@store/index";
import {setAccentColor} from "@store/app/app.slice";
import Typography from "@components/Typography/Typography";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import styles from "./InterfaceSettings.module.scss";

const InterfaceSettings = () => {
	const dispatch = useDispatch();
	const accentColor = useSelector(
		(state: RootState) => state.appState.accentColor
	);

	const handleClick = (color: AccentColor) => dispatch(setAccentColor(color));

	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				Інтерфейс
			</Typography>
			<SeparatorItem>
				<Typography
					className={styles["small-title"]}
					variant="h4"
					component="h4"
				>
					Акцентний колір
				</Typography>
				<div className={styles.items}>
					<ColorButton
						className={styles.item}
						onClick={handleClick}
						activeColorName={accentColor}
						color="#00D4C3"
					/>
					<ColorButton
						className={styles.item}
						onClick={handleClick}
						activeColorName={accentColor}
						color="#009AD2"
					/>
				</div>
			</SeparatorItem>
			<SeparatorItem>
				<LanguageDropdown />
			</SeparatorItem>
		</>
	);
};

export default InterfaceSettings;
