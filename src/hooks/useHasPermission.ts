import { useMemo } from 'react';

import { RoleType, User } from '@/types/user';

/**
 * The role types hierarchy is defined here, going from least to most privileged.
 */
const roleHierarchy = [RoleType.User, RoleType.Admin];

type Props = {
	/**
	 * List of roles for a given action or access.
	 * This should represent the least privileged role required if explicitMatch is false.
	 */
	userData: User;
	requiredRoles?: RoleType[];
	options?: {
		explicitMatch?: boolean;
	};
};

export const useHasPermission = ({ requiredRoles = [], options = {}, userData }: Props) => {
	const userRole = userData?.role ?? RoleType.User;

	/**
	 * it validates the user's role against the hierarchy of roles by default
	 */
	const hasPermission = useMemo(() => {
		let permissionStatus = false;
		const userRoleIndex = roleHierarchy.indexOf(userRole);

		for (const role of requiredRoles) {
			const requiredRoleIndex = roleHierarchy.indexOf(role);

			if (options.explicitMatch) {
				if (userRole === role) {
					permissionStatus = true;
					break;
				}
			} else if (userRoleIndex >= requiredRoleIndex) {
				permissionStatus = true;
				break;
			}
		}

		return permissionStatus;
	}, [userRole, requiredRoles, options.explicitMatch]);

	return {
		hasPermission,
		userData
	};
};
