import React, {FC, ReactNode, useEffect} from "react";
import classNames from "classnames";
import {IoClose} from "react-icons/io5";
import Divider from "@components/Divider/Divider";
import ClickExtender from "@components/ClickExtender/ClickExtender";
import styles from "./Modal.module.scss";

export interface ModalProps {
	title?: string;
	children?: ReactNode;
	className?: string;
	width?: string;
	onClose?: () => void;
}

const Modal: FC<ModalProps> = ({
	title,
	children,
	className,
	onClose,
	width
}) => {
	useEffect(() => {
		document.body.classList.add("lock");
		return () => document.body.classList.remove("lock");
	}, []);

	return (
		<div
			role="presentation"
			onClick={onClose}
			className={classNames(className, styles.modal, styles.visible)}
		>
			<div
				onClick={e => e.stopPropagation()}
				role="presentation"
				className={styles.content}
				style={{width}}
			>
				<div className={styles.header}>
					<h4 className={styles.title}>{title}</h4>
					<ClickExtender
						className={styles["close-btn"]}
						type="button"
						onClick={onClose}
					>
						<IoClose className={styles["close-icon"]} size={24} />
					</ClickExtender>
				</div>
				<Divider />
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
