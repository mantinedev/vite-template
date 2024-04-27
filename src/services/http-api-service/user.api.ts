import { BasePaginatedQueryArgs, BasePaginatedQueryRes } from '@/types';
import { User } from '@/types/user';

import { backendAPIAxiosInstance } from './axios-instance';

export type PostAuthLoginRequestBody = {
	email: string;
	password: string;
};
export type PostAuthRegisterRequestBody = PostAuthLoginRequestBody;

export type GetUserQueryArgs = BasePaginatedQueryArgs & {
	searchUser?: string;
};

export type UpdateUserMutationArgs = {
	userId: string;
	user: Partial<User>;
};

export const userHttpService = {
	getUsers: (args: GetUserQueryArgs) =>
		backendAPIAxiosInstance.get<BasePaginatedQueryRes<User>>(`/api/User`, {
			params: {
				Page: args.page,
				PageSize: args.pageSize,
				SortBy: args.sortBy,
				SortOrder: args.sortOrder,
				SearchUser: args.searchUser,
				isDeleted: args.isDeleted
			}
		}),
	updateUser: ({ userId, user }: UpdateUserMutationArgs) =>
		backendAPIAxiosInstance.put<User>(`/api/User/${userId}`, user)
};
