import React, {FC, useState} from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import {setLanguage} from "@store/app/app.slice";
import {Language} from "@customTypes/index";

const LanguageDropdown: FC<{className?: string}> = ({className}) => {
	const dispatch = useDispatch();
	const language = useSelector((state: RootState) => state.appState.language);
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (value: Language) => {
		dispatch(setLanguage(value));
		setIsVisible(false);
	};

	return (
		<Dropdown
			className={className}
			isVisible={isVisible}
			setIsVisible={setIsVisible}
			value={language.toUpperCase()}
		>
			<DropdownOption
				value="ua"
				text="UA"
				isActive={language === "ua"}
				onClick={handleClick}
			/>
			<DropdownOption
				value="en"
				text="EN"
				isActive={language === "en"}
				onClick={handleClick}
			/>
			<DropdownOption
				value="ru"
				text="RU"
				isActive={language === "ru"}
				onClick={handleClick}
			/>
		</Dropdown>
	);
};

export default LanguageDropdown;
