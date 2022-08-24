import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import {IoClose} from "react-icons/io5";
import ClickExtender from "@components/ClickExtender/ClickExtender";
import styles from "./TagItem.module.scss";

interface TagItemProps {
	className?: string;
	hasRemoveBtn?: boolean;
	onRemoveBtnClick?: MouseEventHandler;
	text: string;
}

const TagItem: FC<TagItemProps> = ({
	text,
	className,
	hasRemoveBtn = false,
	onRemoveBtnClick
}) => {
	if (hasRemoveBtn) {
		return (
			<div className={classNames(className, styles.item, styles.inner)}>
				<span className={styles.text}>{text}</span>
				<ClickExtender
					className={styles.button}
					onClick={onRemoveBtnClick}
					type="button"
				>
					<IoClose className={styles.icon} size={16} />
				</ClickExtender>
			</div>
		);
	}

	return <div className={classNames(className, styles.item)}>{text}</div>;
};

export default TagItem;
