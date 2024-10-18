import Button from "@/components/Button";
import Header from "@/components/Header";
import { Stack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Stack h="screen" paddingX="4rem">
      <Header></Header>

      <Button label="AQ"></Button>
    </Stack>
  );
}
