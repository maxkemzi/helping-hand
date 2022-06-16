import {RefObject, useEffect} from "react";

const useListenClickOutside = (
	ref: RefObject<HTMLButtonElement>,
	onClickOutside: () => void
) => {
	useEffect(() => {
		const handleClickOutside = ({target}: MouseEvent): void => {
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
