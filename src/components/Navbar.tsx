import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Group, Burger, Text, Stack, Collapse, useMantineTheme, Box } from '@mantine/core';

export function Navbar() {
  const theme = useMantineTheme();
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState('Home');
  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Kadaver', path: '/kadaver' },
  ];

  const onClickNavLink = (name: string) => {
    setActive(name);
  };

  useEffect(() => {
    const currentMenuItem = menuItems.find((item) => item.path === location.pathname);
    if (currentMenuItem) {
      setActive(currentMenuItem.name);
    }
  }, [location.pathname]);

  return (
    <Box bg={theme.colors.blue[9]}>
      <Group justify="space-between" align="center" h={90} px="md">
        <Text>Jorams website</Text>

        <Group visibleFrom="sm" h="100%">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => onClickNavLink(item.name)}
              style={{
                backgroundColor: active === item.name ? theme.colors.blue[4] : '',
                color: theme.colors.orange[4],
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Group>
        <Burger m="md" opened={opened} hiddenFrom="sm" onClick={toggle} />
      </Group>

      <Collapse in={opened} onClick={toggle} transitionDuration={200} animateOpacity>
        <Stack pb="md" align="stretch" ta="center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => onClickNavLink(item.name)}
              style={{
                backgroundColor: active === item.name ? theme.colors.blue[4] : '',
                color: theme.colors.orange[4],
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}
