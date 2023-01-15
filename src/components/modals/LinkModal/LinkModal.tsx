import React, {ChangeEvent, FC, useState} from "react";
import Modal, {ModalProps} from "@components/Modal/Modal";
import Button from "@components/Button/Button";
import TextField from "@components/TextField/TextField";
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
		<Modal hasHeader={false} {...props}>
			<div className={styles.content}>
				<TextField
					className={styles.input}
					onChange={handleChange}
					value={value}
					element={Input}
					label="Посилання"
				/>
				<div className={styles.buttons}>
					<Button
						size="small"
						variant="outline"
						className={styles.button}
						onClick={() => onConfirm(value)}
						text="Скасувати"
					/>
					<Button
						size="small"
						className={styles.button}
						onClick={() => onConfirm(value)}
						text="Ок"
					/>
				</div>
			</div>
		</Modal>
	);
};

export default LinkModal;
