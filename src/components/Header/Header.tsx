import { useState } from 'react';
import {
  IconChevronDown,
  IconLogs,
  IconLogout,
  IconSettings,
  IconSpray,
  IconStar,
  IconSwitchHorizontal,
  IconBrandCashapp,
  IconWashHand,
  IconTool,
  IconCar
} from '@tabler/icons-react';
import cx from 'clsx';
import {
  Avatar,
  Burger,
  Container,
  Group,
  Menu,
  NavLink,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MocLogo from '../../assets/MP_logo1.png'
import classes from './Header.module.css';

const user = {
  name: 'Don Draper',
  email: 'DonnyD@aol.com',
  image: 'data:image/jpeg;base64,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',
};

export function Header() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">

          <a href="/">
            <img src={MocLogo} />
          </a>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
              >
                Saved Items
              </Menu.Item>
              <Menu.Item
                leftSection={<IconLogs size={16} color={theme.colors.blue[6]} stroke={1.5} />}
              >
                Order History
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Group style={{ justifyContent: 'space-between'}}>
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="/parts"
                label="PARTS"
                leftSection={<IconCar size={16} stroke={1.5} />}
            />
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="https://g2stobeq.ca/digital-catalogue/"
                label="TOOLS"
                leftSection={<IconTool size={16} stroke={1.5} />}
            />
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="/detailers"
                label="DETAILER'S DEPOT"
                leftSection={<IconSpray size={16} stroke={1.5} />}
            />
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="/cleaning"
                label="CLEANING SUPPLIES"
                leftSection={<IconWashHand size={16} stroke={1.5} />}
            />
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="/f_and_i"
                label="F & I DEPT."
                leftSection={<IconBrandCashapp size={16} stroke={1.5} />}
            />
            <NavLink
                styles={{
                    root: { width: 'fit-content' }
                  }}
                href="/about"
                label="ABOUT US"
                leftSection={<IconLogout size={16} stroke={1.5} />}
            />
        </Group>
      </Container>
    </div>
  );
}