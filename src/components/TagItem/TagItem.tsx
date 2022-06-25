import React, {FC, MouseEventHandler} from "react";
import {ITag} from "@customTypes/index";
import classNames from "classnames";
import styles from "./TagItem.module.scss";
import CrossIcon from "../../icons/CrossIcon/CrossIcon";

interface TagItemProps {
	className?: string;
	hasRemoveBtn?: boolean;
	onRemoveBtnClick?: MouseEventHandler;
}

const TagItem: FC<ITag & TagItemProps> = ({
	text,
	className,
	hasRemoveBtn = false,
	onRemoveBtnClick
}) => {
	if (hasRemoveBtn) {
		return (
			<div className={classNames(className, styles.item, styles.inner)}>
				<span className={styles.text}>{text}</span>
				<button onClick={onRemoveBtnClick} type="button" className={styles.btn}>
					<CrossIcon width={8} height={8} />
				</button>
			</div>
		);
	}

	return <div className={classNames(className, styles.item)}>{text}</div>;
};

export default TagItem;
