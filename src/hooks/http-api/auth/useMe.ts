import { useQuery } from '@tanstack/react-query';

import { useAuthContext } from '@/providers/AuthProvider';
import { authHttpService } from '@/services/http-api-service';

export function useMe(enabled = true) {
	const { isLoggedIn } = useAuthContext();

	const findMeResult = useQuery({
		queryKey: ['authHttpService', 'me'],
		queryFn: () => authHttpService.getAuthMeInfo(),
		enabled: !!isLoggedIn && enabled
	});

	const userProfile = findMeResult.data?.data;

	return { findMeResult, userProfile };
}
