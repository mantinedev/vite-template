import { ActionIcon, Alert, Flex, Stack, Text, Title, Tooltip } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconCheck, IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
	// createRow,
	type MRT_ColumnDef,
	MRT_ColumnFiltersState,
	MRT_EditActionButtons,
	type MRT_Row,
	type MRT_TableOptions,
	MantineReactTable,
	useMantineReactTable
} from 'mantine-react-table';
import { useEffect, useMemo, useState } from 'react';

import { useGetUsers } from '@/hooks/http-api/user/useGetUsers';
import useCustomPagination from '@/hooks/useCustomPagination';
import { User } from '@/types/user';
import { useUpdateUserMutation } from '@/hooks/http-api/user/useUpdateUserMutation';
import { UpdateUserMutationArgs } from '@/services/http-api-service/user.api';

import { validateUser } from './lib/validation-utils';

const defaultPageSize = 10;

export const UsersManagement = () => {
	/**************************************
	 * Pagination
	 *************************************/
	const [totalCount, setTotalCount] = useState(0);
	const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: defaultPageSize });
	const paginationParams = useMemo(
		() => ({
			page: pagination.pageIndex + 1,
			pageSize: pagination.pageSize
		}),
		[pagination]
	);

	const paginationData = useCustomPagination({
		paginationParams,
		totalCount
	});

	/**************************************
	 * Filters
	 *************************************/
	const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = useState<string | undefined>(undefined);

	const isDeletedFilter = columnFilters.find(filter => filter.id === 'isDeleted')?.value as boolean | undefined;

	/**************************************
	 * Api
	 *************************************/
	const { getUsersResult, paginatedWrappedUser } = useGetUsers({
		args: {
			page: paginationData.currentPage,
			pageSize: paginationData.limit,
			searchUser: globalFilter,
			isDeleted: isDeletedFilter
		}
	});

	const { mutateAsync: updateUser, isPending: isUpdatingUser } = useUpdateUser();
	const {
		updateUserMutationResult: { mutateAsync: deleteUser, isPending: isDeletingUser }
	} = useUpdateUserMutation();

	/**************************************
	 * Users data
	 *************************************/
	const { isError: isLoadingUsersError, isFetching: isFetchingUsers, isLoading: isLoadingUsers } = getUsersResult;
	const fetchedUsers = paginatedWrappedUser?.items ?? [];
	const totalCountData = paginatedWrappedUser?.totalCount ?? 0;

	useEffect(() => {
		if (totalCountData) {
			setTotalCount(totalCountData);
		} else {
			setTotalCount(0);
		}
	}, [totalCountData]);

	/**************************************
	 * React Mantine Table
	 *************************************/
	const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});
	const columns = useMemo<MRT_ColumnDef<User>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'Id',
				enableEditing: false,
				size: 80,
				enableColumnFilter: false
			},
			{
				accessorKey: 'userName',
				header: 'User Name',
				enableColumnFilter: false
			},
			{
				accessorKey: 'email',
				header: 'Email',
				enableColumnFilter: false
			},
			{
				accessorKey: 'isDeleted',
				header: 'Is Deleted',
				filterVariant: 'checkbox',
				Cell: ({ cell }) => {
					const isDeleted = cell.getValue();

					if (isDeleted) {
						return <IconCheck color="var(--mantine-color-green-2)" />;
					}

					return <IconX color="var(--mantine-color-red-6)" />;
				},
				enableSorting: false
			}
		],
		[validationErrors]
	);

	/**************************************
	 * Actions
	 *************************************/
	const handleSaveUser: MRT_TableOptions<User>['onEditingRowSave'] = async ({ values, table }) => {
		const newValidationErrors = validateUser(values);
		if (Object.values(newValidationErrors).some(error => error)) {
			setValidationErrors(newValidationErrors);
			return;
		}
		setValidationErrors({});
		await updateUser(values);
		table.setEditingRow(null); //exit editing mode
	};

	const openDeleteConfirmModal = (row: MRT_Row<User>) =>
		modals.openConfirmModal({
			title: 'Are you sure you want to delete this user?',
			children: <Text>Are you sure you want to delete {row.original.userName}? This action cannot be undone.</Text>,
			labels: { confirm: 'Delete', cancel: 'Cancel' },
			confirmProps: { color: 'red' },
			onConfirm: () => {
				const userToUpdate: Partial<User> = { ...row.original, isDeleted: true };
				const mutationArgs: UpdateUserMutationArgs = { userId: row.original.id, user: userToUpdate };
				deleteUser(mutationArgs);
			}
		});

	const mantineReactTable = useMantineReactTable({
		columns,
		data: fetchedUsers,

		//features
		enablePagination: true,
		enablePinning: true,

		// Mantine props
		mantineFilterCheckboxProps: {},

		// pagination props
		paginationDisplayMode: 'pages',
		manualPagination: true,
		rowCount: paginationData.totalCount,
		onPaginationChange: setPagination,

		// filtering props
		onGlobalFilterChange: setGlobalFilter,
		manualFiltering: true,
		onColumnFiltersChange: setColumnFilters,

		editDisplayMode: 'modal',
		enableEditing: true,
		getRowId: row => row.id,
		mantineToolbarAlertBannerProps: isLoadingUsersError
			? {
					color: 'red',
					children: 'Error loading data'
				}
			: undefined,
		mantineTableContainerProps: {
			style: {
				minHeight: '500px'
			}
		},
		onCreatingRowCancel: () => setValidationErrors({}),
		onEditingRowCancel: () => setValidationErrors({}),
		onEditingRowSave: handleSaveUser,
		renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
			<Stack>
				<Alert color="red">This just updates locally for now, ignore this feature</Alert>
				<Title order={3}>Edit User</Title>
				{internalEditComponents}
				<Flex justify="flex-end" mt="xl">
					<MRT_EditActionButtons variant="text" table={table} row={row} />
				</Flex>
			</Stack>
		),
		renderRowActions: ({ row, table }) => (
			<Flex gap="md">
				<Tooltip label="Edit">
					<ActionIcon onClick={() => table.setEditingRow(row)}>
						<IconEdit />
					</ActionIcon>
				</Tooltip>
				<Tooltip label="Delete">
					<ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
						<IconTrash />
					</ActionIcon>
				</Tooltip>
			</Flex>
		),
		// renderTopToolbarCustomActions: ({ table }) => (
		// 	<Button
		// 		onClick={() => {
		// 			table.setCreatingRow(true); //simplest way to open the create row modal with no default values
		// 		}}
		// 	>
		// 		Create New User
		// 	</Button>
		// ),
		initialState: {
			showColumnFilters: true,
			showGlobalFilter: true,
			columnVisibility: {
				id: false
			},
			density: 'xs'
		},
		state: {
			isLoading: isLoadingUsers,
			isSaving: isUpdatingUser || isDeletingUser,
			showAlertBanner: isLoadingUsersError,
			showProgressBars: isFetchingUsers,
			pagination,
			globalFilter,
			columnFilters
		}
	});

	return <MantineReactTable table={mantineReactTable} />;
};

//UPDATE hook (put user in api)
function useUpdateUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => {
			//send api update request here
			await new Promise(resolve => {
				setTimeout(resolve, 1000);
			}); //fake api call
			return Promise.resolve();
		},
		//client side optimistic update
		onMutate: (newUserInfo: User) => {
			queryClient.setQueryData(['users'], (prevUsers: any) =>
				prevUsers?.map((prevUser: User) => (prevUser.id === newUserInfo.id ? newUserInfo : prevUser))
			);
		}
		// onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
	});
}
