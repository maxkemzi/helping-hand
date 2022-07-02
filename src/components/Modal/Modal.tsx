import React, {Dispatch, FC, ReactNode, SetStateAction, useEffect} from "react";
import classNames from "classnames";
import CrossIcon from "@icons/CrossIcon/CrossIcon";
import styles from "./Modal.module.scss";

interface ModalProps {
	title: string;
	children: ReactNode;
	className?: string;
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({
	title,
	children,
	className,
	isVisible,
	setIsVisible
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
			>
				<div className={styles.header}>
					<h4 className={styles.title}>{title}</h4>
					<div className={styles["btn-wrapper"]}>
						<button
							onClick={handleClose}
							className={styles["close-btn"]}
							type="button"
						>
							<CrossIcon width={20} height={20} />
						</button>
					</div>
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
