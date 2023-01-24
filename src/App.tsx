import { Text, Button, Stack } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
       <Button component="a" href="https://mantine.dev" target="_blank">
      </Stack>
    </ThemeProvider>
  );
}
