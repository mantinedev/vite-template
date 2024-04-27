import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UpdateUserMutationArgs, userHttpService } from '@/services/http-api-service/user.api';

export function useUpdateUserMutation() {
	const queryClient = useQueryClient();

	const updateUserMutationResult = useMutation({
		mutationFn: (mutationArgs: UpdateUserMutationArgs) => userHttpService.updateUser(mutationArgs),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['userHttpService']
			});
		}
	});

	return { updateUserMutationResult };
}
