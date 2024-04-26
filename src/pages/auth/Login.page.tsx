import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { AuthenticationForm } from '@/features/Authentication/AuthenticationForm/AuthenticationForm';

export function LoginPage() {
	return (
		<>
			<ColorSchemeToggle />
			<AuthenticationForm />
		</>
	);
}
