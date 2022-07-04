import React, {FC, useState} from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownOption from "@components/DropdownOption/DropdownOption";
import {useTranslation} from "react-i18next";
import supportedLangs, {Lang} from "@utils/constants/langs";

const LanguageDropdown: FC<{className?: string}> = ({className}) => {
	const {i18n} = useTranslation();
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (lang: Lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setIsVisible(false);
	};

	return (
		<Dropdown
			className={className}
			isVisible={isVisible}
			setIsVisible={setIsVisible}
			value={i18n.language.toUpperCase()}
		>
			{Object.keys(supportedLangs).map((lang: Lang) => (
				<DropdownOption
					key={lang}
					value={lang}
					text={supportedLangs[lang]}
					isActive={i18n.resolvedLanguage === lang}
					onClick={() => handleClick(lang)}
				/>
			))}
		</Dropdown>
	);
};

export default LanguageDropdown;
