import React, {FC} from "react";
import TasksCreateForm from "@views/Tasks/TasksCreateForm/TasksCreateForm";
import Modal, {ModalProps} from "@components/Modal/Modal";

const CreateFormModal: FC<ModalProps> = ({onClose, ...props}) => (
	<Modal width="700px" title="Create task" onClose={onClose} {...props}>
		<TasksCreateForm onSubmit={onClose} />
	</Modal>
);

export default CreateFormModal;
