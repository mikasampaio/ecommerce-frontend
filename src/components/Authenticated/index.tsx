import { ReactNode } from "react";
import Header from "../Header";
import { Box, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

interface AuthenticationProps {
  children: ReactNode;
}

export default function Authenticated({ children }: AuthenticationProps) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box
        w="100vw"
        paddingX={{
          base: "1rem",
          md: "4rem",
        }}
        paddingY={{
          base: "1rem",
          md: "1.5rem",
        }}
      >
        <Header />

        <Stack paddingY="1rem" gap="1rem">
          {children}
        </Stack>
      </Box>
    </FormProvider>
  );
}
