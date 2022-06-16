import React, {FC, useState} from "react";
import DropdownOption from "@components/Dropdown/DropdownOption/DropdownOption";
import Dropdown from "@components/Dropdown/Dropdown";

const HeaderLanguageDropdown: FC = () => {
	const [dropdownValue, setDropdownValue] = useState("UA");
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (value: string) => {
		setDropdownValue(value);
		setIsVisible(false);
	};

	return (
		<Dropdown
			isVisible={isVisible}
			setIsVisible={setIsVisible}
			value={dropdownValue}
		>
			<DropdownOption
				value="UA"
				isActive={dropdownValue === "UA"}
				onClick={handleClick}
			/>
			<DropdownOption
				value="RU"
				isActive={dropdownValue === "RU"}
				onClick={handleClick}
			/>
			<DropdownOption
				value="EN"
				isActive={dropdownValue === "EN"}
				onClick={handleClick}
			/>
		</Dropdown>
	);
};

export default HeaderLanguageDropdown;
