import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { cloneDeep, merge } from 'lodash-es';

import { GetUserQueryArgs, userHttpService } from '@/services/http-api-service/user.api';
import { ApiQueryHookArgs } from '@/types';

type Props = ApiQueryHookArgs<GetUserQueryArgs>;

const defaultArgs: Props = {
	args: {
		page: 1,
		pageSize: 10
	}
};

export function useGetUsers(queryArgs: Props = defaultArgs) {
	const { args, options } = queryArgs;

	const mergedArgs = merge(cloneDeep(defaultArgs.args), args);
	const enabled = options?.enabled ?? true;

	const getUsersResult = useQuery({
		queryKey: ['userHttpService', mergedArgs],
		queryFn: () => userHttpService.getUsers(mergedArgs),
		enabled
	});

	const paginatedWrappedUser = getUsersResult.data?.data;

	if (getUsersResult.isError) {
		notifications.show({
			title: 'Error',
			message: `Failed to fetch user data, ${getUsersResult.error}`,
			color: 'red',
			icon: <IconX />
		});
	}

	return { getUsersResult, paginatedWrappedUser };
}
