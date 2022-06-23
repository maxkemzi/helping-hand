import React, {Dispatch, FC, ReactNode, SetStateAction} from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";
import CrossIcon from "../../icons/CrossIcon/CrossIcon";

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
}) => (
	<div
		role="presentation"
		onClick={() => {
			setIsVisible(false);
			document.body.classList.remove("lock");
		}}
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
						onClick={() => setIsVisible(false)}
						className={styles["close-btn"]}
						type="button"
					>
						<CrossIcon />
					</button>
				</div>
			</div>
			<div className={styles.body}>{children}</div>
		</div>
	</div>
);

export default Modal;
