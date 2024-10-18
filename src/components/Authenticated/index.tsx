import { ReactNode } from "react";
import Header from "../Header";
import { VStack } from "@chakra-ui/react";

interface AuthenticationProps {
  children: ReactNode;
}

export default function Authenticated({ children }: AuthenticationProps) {
  return (
    <VStack w="100vw" paddingX="4rem">
      <Header />

      {children}
    </VStack>
  );
}
