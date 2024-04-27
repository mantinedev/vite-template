import { User } from '@/types/user';

export const validateRequired = (value: string) => !!value.length;
export const validateEmail = (email: string) =>
	!!email.length &&
	email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

export function validateUser(user: User) {
	return {
		email: !validateEmail(user.email) ? 'Incorrect Email Format' : ''
	};
}
