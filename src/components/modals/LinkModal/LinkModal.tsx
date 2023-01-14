import React, {ChangeEvent, FC, useState} from "react";
import Modal, {ModalProps} from "@components/Modal/Modal";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import styles from "./LinkModal.module.scss";

interface LinkModalProps extends ModalProps {
	onConfirm: (href: string) => void;
}

const LinkModal: FC<LinkModalProps> = ({onConfirm, ...props}) => {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<Modal title="Enter your link" {...props}>
			<div className={styles.content}>
				<Input
					placeholder="Link"
					className={styles.input}
					onChange={handleChange}
					value={value}
				/>
				<Button
					className={styles.button}
					onClick={() => onConfirm(value)}
					text="Ok"
				/>
			</div>
		</Modal>
	);
};

export default LinkModal;
