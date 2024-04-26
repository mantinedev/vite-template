import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from '@mantine/hooks';

import { authHttpService } from '@/services/http-api-service';
import { SESSION_STORAGE_KEY } from '@/constants/localStorage';

export function useMe(enabled = true) {
	const [value, setValue] = useLocalStorage({
		key: SESSION_STORAGE_KEY,
		defaultValue: false
	});

	const findMeResult = useQuery({
		queryKey: ['authHttpService', 'me'],
		queryFn: () => authHttpService.getAuthMeInfo(),
		enabled: !!value && enabled
	});

	const userProfile = findMeResult.data?.data;

	return { findMeResult, userProfile };
}
