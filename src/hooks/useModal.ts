import {useCallback, useState} from "react";
import {ModalStore, ModalTypes, ModalValue} from "@utils/constants/modal";

// Hook that provides all the necessary data for the modal context
// Returns modal store, open and close functions
const useModal = (): ModalValue => {
	const [store, setStore] = useState<ModalStore>({
		modalProps: null,
		modalType: null
	});

	// Close modal
	const closeModal = useCallback(() => {
		setStore(prev => ({
			...prev,
			modalType: null,
			modalProps: {}
		}));
	}, []);

	// Open modal
	// Accepts modal type and props that'll be passed to modal component
	const openModal = useCallback(
		(type: ModalTypes, props: {[key: string]: unknown} = {}) => {
			setStore(prev => ({
				...prev,
				modalType: type,
				modalProps: props
			}));
		},
		[]
	);

	return {
		store,
		openModal,
		closeModal
	};
};

export default useModal;
