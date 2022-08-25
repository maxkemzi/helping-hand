import React, {FC} from "react";
import Button, {ButtonProps} from "@components/Button/Button";
import {IoFilter} from "react-icons/io5";
import classNames from "classnames";
import styles from "./FilterButton.module.scss";

const FilterButton: FC<ButtonProps> = ({className, ...props}) => (
	<Button
		className={classNames(className, styles.button)}
		aria-label="filter"
		variant="outline"
		{...props}
	>
		<IoFilter size={18} />
	</Button>
);

export default FilterButton;
