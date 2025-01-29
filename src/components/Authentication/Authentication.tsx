import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import MocLogo from '../../assets/MP_mini_logo.png'
  import classes from './Authentication.module.css';
import { useNavigate } from 'react-router-dom';

  
export function Authentication() {
    const navigate = useNavigate();

    return (
        <Container size={420} my={40}>
        <img className={classes.logo} src={MocLogo} />

        <Paper withBorder shadow="md" p={30} radius="md">
            <TextInput label="Username" placeholder="MocProductId" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Button fullWidth mt="xl" onClick={() => navigate('/')}>
            Sign in
            </Button>
        </Paper>
        </Container>
    );
}