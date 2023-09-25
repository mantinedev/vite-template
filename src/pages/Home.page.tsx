import { DatePickerInput } from '@mantine/dates';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DatePickerInput placeholder="Some input" />
    </>
  );
}
