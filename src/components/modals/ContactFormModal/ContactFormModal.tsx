import React, {FC} from "react";
import Modal, {ModalProps} from "@components/Modal/Modal";
import ContactForm from "@components/ContactForm/ContactForm";

interface ContactFormModalProps extends ModalProps {
	onClose: () => void;
}

const ContactFormModal: FC<ContactFormModalProps> = ({onClose, ...props}) => (
	<Modal title="Зв'язатись" onClose={onClose} {...props}>
		<ContactForm />
	</Modal>
);

export default ContactFormModal;
