import React from "react";
import SeparatorItem from "@components/SeparatorItem/SeparatorItem";
import {useDispatch, useSelector} from "react-redux";
import ThemeButton from "@components/ThemeButton/ThemeButton";
import Typography from "@components/Typography/Typography";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import {setTheme} from "@store/app/app.slice";
import themes from "@utils/constants/themes";
import {RootState} from "@store/index";
import {Theme} from "@customTypes/index";
import styles from "./InterfaceSettings.module.scss";

const InterfaceSettings = () => {
	const dispatch = useDispatch();
	const themeSelector = useSelector((state: RootState) => state.appState.theme);

	const handleClick = (item: Theme) => dispatch(setTheme(item));

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
					{themes.map(theme => (
						<ThemeButton
							className={styles.item}
							onClick={handleClick}
							isActive={theme.name === themeSelector.name}
							theme={theme}
						/>
					))}
				</div>
			</SeparatorItem>
			<SeparatorItem>
				<LanguageDropdown />
			</SeparatorItem>
		</>
	);
};

export default InterfaceSettings;
