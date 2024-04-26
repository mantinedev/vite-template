import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authHttpService, PostAuthRegisterRequestBody } from '@/services/http-api-service';

export function useRegisterUserMutation() {
	const queryClient = useQueryClient();

	const registerUserMutationResult = useMutation({
		mutationFn: (mutationArgs: PostAuthRegisterRequestBody) => authHttpService.postAuthRegister(mutationArgs),
		onSuccess: () => {}
	});

	return { registerUserMutationResult };
}
