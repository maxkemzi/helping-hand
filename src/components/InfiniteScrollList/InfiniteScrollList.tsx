import React, {FC, ReactNode, useRef} from "react";
import useObserver from "../../hooks/useObserver";

interface InfiniteScrollListProps {
	hasMore: boolean;
	isFetching: boolean;
	onLoadMore: () => void;
	children: ReactNode;
	isEmpty?: boolean;
	searchIsEmpty?: boolean;
}

const InfiniteScrollList: FC<InfiniteScrollListProps> = ({
	hasMore,
	children,
	isFetching,
	onLoadMore,
	isEmpty,
	searchIsEmpty
}) => {
	const lastElementRef = useRef<HTMLDivElement>(null);

	useObserver(lastElementRef, hasMore, isFetching, onLoadMore);

	return (
		<>
			{isEmpty && !searchIsEmpty && !isFetching && (
				<p>No results for your search query</p>
			)}
			{isEmpty && searchIsEmpty && !isFetching && <p>There are no tasks</p>}
			{!isEmpty && children}
			{isFetching && "Loading..."}
			{!isFetching && <div ref={lastElementRef} />}
		</>
	);
};

export default InfiniteScrollList;
