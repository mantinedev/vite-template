import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authHttpService, PostAuthLoginRequestBody } from '@/services/http-api-service';

export function useLoginUserMutation() {
	const queryClient = useQueryClient();

	const loginUserMutationResult = useMutation({
		mutationFn: (mutationArgs: PostAuthLoginRequestBody) => authHttpService.postAuthLogin(mutationArgs),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['authHttpService']
			});
		}
	});

	return { loginUserMutationResult };
}
