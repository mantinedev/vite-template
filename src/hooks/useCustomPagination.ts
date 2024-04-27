import { useState, useEffect } from 'react';

type PaginationParams = {
	page: number;
	pageSize: number;
};

export type PaginationData = {
	offset: number;
	limit: number;
	totalCount: number;
	totalPages: number;
	currentPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	nextPage: number | null;
	previousPage: number | null;
};

type Props = {
	paginationParams: PaginationParams;
	totalCount: number;
};

const useCustomPagination = ({ paginationParams, totalCount }: Props): PaginationData => {
	const [params, setParams] = useState<PaginationParams>(paginationParams);

	useEffect(() => {
		setParams(paginationParams);
	}, [paginationParams, totalCount]);

	const { page, pageSize } = params;
	const offset = (page - 1) * pageSize;
	const limit = pageSize;
	const totalPages = Math.ceil(totalCount / pageSize);
	const hasNextPage = page < totalPages;
	const hasPreviousPage = page > 1;
	const nextPage = hasNextPage ? page + 1 : null;
	const previousPage = hasPreviousPage ? page - 1 : null;

	return {
		offset,
		limit,
		totalCount,
		totalPages,
		currentPage: page,
		hasNextPage,
		hasPreviousPage,
		nextPage,
		previousPage
	};
};

export default useCustomPagination;
