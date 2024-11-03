import { ReactNode, useEffect } from "react";
import Header from "../Header";
import { Box, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "@/contexts/userContext";

interface AuthenticationProps {
  children: ReactNode;
}

export default function Authenticated({ children }: AuthenticationProps) {
  const methods = useForm();
  const { user } = useUser();

  useEffect(() => {
    methods.reset({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    });
  }, [user]);

  return (
    <FormProvider {...methods}>
      <Box
      // paddingX={{
      //   base: "1rem",
      //   md: "4rem",
      // }}
      // paddingY={{
      //   base: "1rem",
      //   md: "1.5rem",
      // }}
      >
        <Header />

        <Stack gap="1rem" paddingTop="65px">
          {children}
        </Stack>
      </Box>
    </FormProvider>
  );
}
