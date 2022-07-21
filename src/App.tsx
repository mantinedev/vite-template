import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
        <Button>Click the button</Button>
      </Stack>
    </MantineProvider>
  );
}
