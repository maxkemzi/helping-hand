import {RefObject, useEffect, useRef} from "react";

const useObserver = (
	ref: RefObject<HTMLElement>,
	hasMore: boolean,
	isFetching: boolean,
	callback: () => void
) => {
	const observer = useRef<IntersectionObserver>(null);

	useEffect(() => {
		if (isFetching) {
			return;
		}

		if (observer.current) {
			observer.current.disconnect();
		}

		const cb = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && hasMore) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
	}, [callback, hasMore, isFetching, ref]);
};

export default useObserver;
