import { useQuery } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';

import { useAuthContext } from '@/providers/AuthProvider';
import { authHttpService } from '@/services/http-api-service';

type props = {
	enabled?: boolean;
};

export function useMe({ enabled = true }: props = {}) {
	const { isLoggedIn, logout } = useAuthContext();

	const findMeResult = useQuery({
		queryKey: ['authHttpService', 'me'],
		queryFn: () => authHttpService.getAuthMeInfo(),
		enabled: !!isLoggedIn && enabled
	});

	const userProfile = findMeResult.data?.data;

	if (findMeResult.isError) {
		notifications.show({
			title: 'Error',
			message: `Failed to fetch user data, ${findMeResult.error}`,
			color: 'red',
			icon: <IconX />
		});

		logout();
	}

	return { findMeResult, userProfile };
}
