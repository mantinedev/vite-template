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
