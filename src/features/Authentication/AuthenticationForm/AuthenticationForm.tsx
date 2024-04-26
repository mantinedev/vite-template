import {
	Anchor,
	Button,
	Checkbox,
	Container,
	Divider,
	Group,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import { GoogleButton } from '@/components/MantineUi/Buttons/GoogleButton';
import { useLoginUserMutation } from '@/hooks/http-api/auth/useLoginUserMutation';
import { useRegisterUserMutation } from '@/hooks/http-api/auth/useRegisterUserMutation';

import classes from './AuthenticationForm.module.css';

const TOGGLE_LOGIN_NAME = 'Login';
const TOGGLE_REGISTER_NAME = 'Register';

export function AuthenticationForm() {
	const navigate = useNavigate();

	/**************************************
	 * Api
	 *************************************/
	const { loginUserMutationResult } = useLoginUserMutation();
	const { registerUserMutationResult } = useRegisterUserMutation();

	/**************************************
	 * Forms
	 *************************************/
	const [type, toggle] = useToggle([TOGGLE_LOGIN_NAME, TOGGLE_REGISTER_NAME]);
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			terms: true
		},

		validate: {
			email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
			// Passwords must have at least one non alphanumeric character
			// Passwords must have at least one lowercase ('a'-'z').
			// Passwords must have at least one uppercase ('A'-'Z')
			// Passwords must have at least one digit ('0'-'9')
			// Passwords must have more than 6 characters
			password: val =>
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{7,}$/.test(val)
					? null
					: 'Password should fulfill the requirements'
		}
	});

	const handleSubmit = async () => {
		if (type === TOGGLE_LOGIN_NAME) {
			try {
				await loginUserMutationResult.mutateAsync(form.values);
				notifications.show({
					title: 'Success',
					message: 'Logged in successfully',
					color: 'teal',
					icon: <IconCheck />
				});

				navigate('/user/dashboard');
			} catch (error) {
				notifications.show({
					title: 'Error',
					message: `Failed to login, ${error}`,
					color: 'red',
					icon: <IconX />
				});
			}
		} else {
			try {
				await registerUserMutationResult.mutateAsync(form.values);
				notifications.show({
					title: 'Success',
					message: 'Registered successfully',
					color: 'teal',
					icon: <IconCheck />
				});

				toggle();
			} catch (error) {
				notifications.show({
					title: 'Error',
					message: `Failed to register, ${error}`,
					color: 'red',
					icon: <IconX />
				});
			}
		}
	};

	return (
		<Container
			size="xs"
			classNames={{
				root: classes.root
			}}
		>
			<Paper radius="md" p="xl" withBorder>
				<Text size="lg" fw={500}>
					Welcome to User Management App
				</Text>

				<Group w="100%" my="md" justify="center">
					<Text size="xs" fw={500}>
						{type} with
					</Text>
				</Group>

				<Group grow mb="md" mt="md">
					<GoogleButton disabled radius="xl">
						Google
					</GoogleButton>
				</Group>

				<Divider label="Or continue with email" labelPosition="center" my="lg" />

				<form onSubmit={form.onSubmit(handleSubmit)}>
					<Stack>
						<TextInput
							required
							label="Email"
							placeholder="hello@mantine.dev"
							value={form.values.email}
							onChange={event => form.setFieldValue('email', event.currentTarget.value)}
							error={form.errors.email && 'Invalid email'}
							radius="md"
						/>

						<PasswordInput
							required
							label="Password"
							placeholder="Your password"
							value={form.values.password}
							onChange={event => form.setFieldValue('password', event.currentTarget.value)}
							error={form.errors.password}
							radius="md"
						/>

						{type === TOGGLE_REGISTER_NAME && (
							<Checkbox
								label="I accept terms and conditions"
								checked={form.values.terms}
								onChange={event => form.setFieldValue('terms', event.currentTarget.checked)}
							/>
						)}
					</Stack>

					<Group justify="space-between" mt="xl">
						<Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
							{type === TOGGLE_REGISTER_NAME ? 'Already have an account? Login' : "Don't have an account? Register"}
						</Anchor>
						<Button type="submit" radius="xl">
							{upperFirst(type)}
						</Button>
					</Group>
				</form>
			</Paper>
		</Container>
	);
}
