import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ITheme} from "@customTypes/index";
import {RootState} from "@store/index";
import {setTheme} from "@store/app/app.slice";

const useTheme = (theme: ITheme): void => {
	const dispatch = useDispatch();
	const themeSelector = useSelector((state: RootState) => state.appState.theme);

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
