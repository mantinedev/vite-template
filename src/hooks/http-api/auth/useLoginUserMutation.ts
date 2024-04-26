import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocalStorage } from '@mantine/hooks';

import { authHttpService, PostAuthLoginRequestBody } from '@/services/http-api-service';
import { SESSION_STORAGE_KEY } from '@/constants/localStorage';

export function useLoginUserMutation() {
	const queryClient = useQueryClient();
	const [value, setValue] = useLocalStorage({
		key: SESSION_STORAGE_KEY,
		defaultValue: false
	});

	const loginUserMutationResult = useMutation({
		mutationFn: (mutationArgs: PostAuthLoginRequestBody) => authHttpService.postAuthLogin(mutationArgs),
		onSuccess: () => {
			setValue(true);

			queryClient.invalidateQueries({
				queryKey: ['authHttpService']
			});
		}
	});

	return { loginUserMutationResult };
}
