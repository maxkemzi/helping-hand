import {useLayoutEffect} from "react";
import {useDispatch} from "react-redux";
import {setTheme} from "@store/app/app.slice";
import {Theme} from "@customTypes/components";
import {getAppTheme} from "@store/app/app.selectors";
import useAppSelector from "./useAppSelector";

const useTheme = (theme: Theme): void => {
	const dispatch = useDispatch();
	const themeSelector = useAppSelector(getAppTheme);

	useLayoutEffect(() => {
		// Set global CSS variables
		const setThemeStyleProperties = () => {
			Object.keys(themeSelector.styles).forEach(key => {
				document.documentElement.style.setProperty(
					`--${key}`,
					themeSelector.styles[key]
				);
			});
		};

		// Check if theme isn't in the local storage
		if (!themeSelector) {
			// Add theme to the local storage
			dispatch(setTheme(theme));
		} else {
			setThemeStyleProperties();
		}
	}, [dispatch, theme, themeSelector]);
};

export default useTheme;
