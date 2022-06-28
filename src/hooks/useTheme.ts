import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Theme} from "@customTypes/index";
import {RootState} from "@store/index";
import {setTheme} from "@store/app/app.slice";

const useTheme = (theme: Theme): void => {
	const dispatch = useDispatch();
	const themeSelector = useSelector((state: RootState) => state.appState.theme);

	useLayoutEffect(() => {
		if (!themeSelector) {
			dispatch(setTheme(theme));
		} else {
			Object.keys(themeSelector.styles).forEach(key => {
				document.documentElement.style.setProperty(
					`--${key}`,
					themeSelector.styles[key]
				);
			});
		}
	}, [dispatch, theme, themeSelector]);
};

export default useTheme;
