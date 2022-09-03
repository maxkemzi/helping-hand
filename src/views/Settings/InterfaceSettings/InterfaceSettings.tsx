import React from "react";
import {useDispatch} from "react-redux";
import ThemeButton from "@components/ThemeButton/ThemeButton";
import Typography from "@components/Typography/Typography";
import LanguageDropdown from "@components/LanguageDropdown/LanguageDropdown";
import {setTheme} from "@store/app/app.slice";
import themes from "@utils/constants/themes";
import {getAppTheme} from "@store/app/app.selectors";
import {Theme} from "@customTypes/components";
import Divider from "@components/Divider/Divider";
import {useTranslation} from "react-i18next";
import styles from "./InterfaceSettings.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const InterfaceSettings = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation("translation", {
		keyPrefix: "settings.tabs.interface.content"
	});
	const themeSelector = useAppSelector(getAppTheme);

	const handleClick = (item: Theme) => dispatch(setTheme(item));

	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				{t("title")}
			</Typography>
			<Typography className={styles["small-title"]} variant="h4" component="h4">
				{t("accentColorTitle")}
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
			<Divider className={styles.divider} />
			<LanguageDropdown />
		</>
	);
};

export default InterfaceSettings;
