import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { DoubleHeader } from './components/DoubleHeader/DoubleHeader';
import { CenterText } from './components/Center/CenterText';

export default function App() {
  return (
    <MantineProvider >
   <DoubleHeader/>
   <CenterText/>
    </MantineProvider>
  );
}
