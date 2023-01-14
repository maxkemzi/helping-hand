import React, {createContext, FC, ReactNode, useContext, useMemo} from "react";
import {ModalComponents, ModalValue} from "@utils/constants/modal";
import useModal from "../hooks/useModal";

interface ModalProviderProps {
	children: ReactNode;
}

// Context that provides with functions to open and close modal
const ModalContext = createContext<ModalValue>({
	store: {modalProps: null, modalType: null},
	closeModal: () => {},
	openModal: () => {}
});

const ModalProvider: FC<ModalProviderProps> = ({children}) => {
	const {closeModal, openModal, store} = useModal();
	const {modalType, modalProps} = store || {};

	// Render modal component depending on modal type
	const renderModalComponent = () => {
		// Get modal component by modal type
		const ModalComponent = ModalComponents[modalType];

		if (!modalType || !ModalComponent) {
			return null;
		}

		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			<ModalComponent {...modalProps} />
		);
	};

	// Provider value
	const value: ModalValue = useMemo(
		() => ({store, openModal, closeModal}),
		[closeModal, openModal, store]
	);

	return (
		<ModalContext.Provider value={value}>
			{children}
			{renderModalComponent()}
		</ModalContext.Provider>
	);
};

const useModalContext = () => useContext(ModalContext);

export {ModalContext, ModalProvider, useModalContext};
