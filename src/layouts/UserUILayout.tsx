import { AppShell, Burger, Button, Flex, NavLink as MantineNavLink, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome2, IconUsersGroup } from '@tabler/icons-react';
import { When } from 'react-if';
import { NavLink, Outlet, useMatches, useNavigate } from 'react-router-dom';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { useMe } from '@/hooks/http-api/auth/useMe';
import { useAuthContext } from '@/providers/AuthProvider';

import { Footer } from './Footer/Footer';

export default function UserUiLayout() {
	const [opened, { toggle }] = useDisclosure();
	const navigate = useNavigate();
	const { logout } = useAuthContext();

	const matches = useMatches();

	const checkCurrentRouteActive = (path: string) => matches.some(match => match.pathname === path);

	/**************************************
	 * Api
	 *************************************/
	const { userProfile } = useMe();

	const handleLogout = () => {
		logout();
		navigate('/auth/login', { replace: true });
	};

	return (
		<>
			<AppShell
				header={{ height: { base: 100, sm: 80 } }}
				footer={{ height: { base: 150, sm: 60 } }}
				navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
				padding="md"
			>
				<AppShell.Header>
					<Flex h="100%" px="md" align="center" gap="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						<Stack ml="auto" gap={5}>
							<When condition={!!userProfile}>
								<Text size="sm" fw="500">
									Logged in as: {userProfile?.email}
								</Text>
							</When>
							<ColorSchemeToggle />
						</Stack>
						<Button variant="outline" color="gray" size="sm" onClick={handleLogout}>
							Log out
						</Button>
					</Flex>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					<Title order={2}>Navigations</Title>
					<Stack gap={1} mt="lg">
						<MantineNavLink
							active={checkCurrentRouteActive('/user/dashboard')}
							component={NavLink}
							to="/user/dashboard"
							label="Dashboard"
							leftSection={<IconHome2 size="1rem" stroke={1.5} />}
						/>
						<MantineNavLink
							active={checkCurrentRouteActive('/user/user-management')}
							component={NavLink}
							to="/user/user-management"
							label="Users Management"
							leftSection={<IconUsersGroup size="1rem" stroke={1.5} />}
						/>
					</Stack>
				</AppShell.Navbar>
				<AppShell.Main>
					<Outlet />
				</AppShell.Main>
				<AppShell.Footer>
					<Footer />
				</AppShell.Footer>
			</AppShell>
		</>
	);
}
