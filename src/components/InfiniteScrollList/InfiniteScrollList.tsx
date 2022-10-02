import React, {FC, ReactNode, useRef} from "react";
import useObserver from "../../hooks/useObserver";

interface InfiniteScrollListProps {
	hasMore: boolean;
	isFetching: boolean;
	onLoadMore: () => void;
	children: ReactNode;
}

const InfiniteScrollList: FC<InfiniteScrollListProps> = ({
	hasMore,
	children,
	isFetching,
	onLoadMore
}) => {
	const lastElementRef = useRef<HTMLDivElement>(null);

	useObserver(lastElementRef, hasMore, isFetching, onLoadMore);

	return (
		<>
			{children}
			{isFetching && "Loading..."}
			{!isFetching && <div ref={lastElementRef} />}
		</>
	);
};

export default InfiniteScrollList;
