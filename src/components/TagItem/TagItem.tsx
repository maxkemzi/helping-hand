import React, {FC} from "react";
import {ITag} from "@models/models";
import styles from "./TagItem.module.scss";

const TagItem: FC<ITag> = ({text}) => <div className={styles.item}>{text}</div>;

export default TagItem;
