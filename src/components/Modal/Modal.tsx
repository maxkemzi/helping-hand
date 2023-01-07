import React, {Dispatch, FC, ReactNode, SetStateAction, useEffect} from "react";
import classNames from "classnames";
import {IoClose} from "react-icons/io5";
import Divider from "@components/Divider/Divider";
import ClickExtender from "@components/ClickExtender/ClickExtender";
import styles from "./Modal.module.scss";

interface ModalProps {
	title: string;
	children: ReactNode;
	className?: string;
	isVisible: boolean;
	width?: string;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({
	title,
	children,
	className,
	isVisible,
	setIsVisible,
	width
}) => {
	useEffect(() => {
		if (isVisible) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
		}
	}, [isVisible]);

	const handleClose = () => setIsVisible(false);

	return (
		<div
			role="presentation"
			onClick={handleClose}
			className={classNames(className, styles.modal, {
				[styles.visible]: isVisible
			})}
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
						onClick={handleClose}
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
