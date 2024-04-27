export type ApiQueryHookArgs<T, U = any> = {
	args: T;
	options?: {
		enabled?: boolean;
	};
	meta?: U;
};

export type ApiMutationHookArgs<T = any> = {
	options?: {
		showNotification?: boolean;
	};
	meta?: T;
};

export type BasePaginatedQueryArgs = {
	page: number;
	pageSize: number;
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
	isDeleted?: boolean;
};

export type BasePaginatedQueryRes<T> = {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	page: number;
	pageSize: number;
	totalCount: number;
	totalPages: number;
	items: T[];
};
