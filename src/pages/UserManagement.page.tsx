import { Stack, Title } from '@mantine/core';

import { UsersManagement } from '@/features/UsersManagement/UsersManagement';

export function UserManagementPage() {
	return (
		<Stack gap="lg">
			<Title order={1}>User Management</Title>
			<UsersManagement />
		</Stack>
	);
}
