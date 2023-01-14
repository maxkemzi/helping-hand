import LinkModal from "@components/modals/LinkModal/LinkModal";
import ContactFormModal from "@components/modals/ContactFormModal/ContactFormModal";
import CreateFormModal from "@components/modals/CreateFormModal/CreateFormModal";

export enum ModalTypes {
	Link = "link",
	Contact = "contact",
	CreateTask = "create-task"
}

export const ModalComponents = {
	[ModalTypes.Link]: LinkModal,
	[ModalTypes.Contact]: ContactFormModal,
	[ModalTypes.CreateTask]: CreateFormModal
};

export interface ModalStore {
	modalType: ModalTypes;
	modalProps: {[key: string]: unknown};
}

export interface ModalValue {
	store: ModalStore;
	closeModal: () => void;
	openModal: (
		modalType: ModalTypes,
		modalProps: {[key: string]: unknown}
	) => void;
}
