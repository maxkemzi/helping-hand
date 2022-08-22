import React from "react";
import SeparatorItem from "@components/SeparatorItem/SeparatorItem";
import {useDispatch} from "react-redux";
import ThemeButton from "@components/ThemeButton/ThemeButton";
import Typography from "@components/Typography/Typography";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import {setTheme} from "@store/app/app.slice";
import themes from "@utils/constants/themes";
import {getAppTheme} from "@store/app/app.selectors";
import {Theme} from "@customTypes/components";
import styles from "./InterfaceSettings.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const InterfaceSettings = () => {
	const dispatch = useDispatch();
	const themeSelector = useAppSelector(getAppTheme);

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
