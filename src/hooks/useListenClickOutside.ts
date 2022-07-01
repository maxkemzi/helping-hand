import {RefObject, useEffect} from "react";

const useListenClickOutside = (
	ref: RefObject<any>,
	onClickOutside: () => void
) => {
	useEffect(() => {
		const handleClickOutside = ({target}: MouseEvent): void => {
			// Check if the clicked element isn't an element with the onClickOutside handler
			if (ref.current && !ref.current.contains(target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [ref, onClickOutside]);
};

export default useListenClickOutside;
