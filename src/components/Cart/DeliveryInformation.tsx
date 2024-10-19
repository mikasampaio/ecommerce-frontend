import { Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

interface DeliveryInformationProps {
  user: {
    _id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export default function DeliveryInformation({
  user,
}: DeliveryInformationProps) {
  return (
    <Stack
      gap="1rem"
      border="1px solid"
      borderColor="gray.200"
      borderRadius=".3rem"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
      width={{
        base: "100%",
        md: "calc(60% - 1rem)",
      }}
    >
      <HStack
        borderBottom="1px solid"
        borderBottomColor="gray.300"
        padding="1rem"
        justifyContent="space-between"
      >
        <Heading
          as="h5"
          size={{
            base: "sm",
            md: "md",
          }}
        >
          Informações de entrega
        </Heading>

        <Button rounded="full">Editar informações</Button>
      </HStack>

      <Stack padding="1rem" gap="1.5rem">
        <HStack alignItems="center" gap="2rem">
          <Heading as="h6" size="sm">
            Nome:
          </Heading>
          <Text>{user.name}</Text>
        </HStack>

        <HStack alignItems="center" gap="2rem">
          <Heading as="h6" size="sm">
            Endereço:
          </Heading>
          <Text>{user.address}</Text>
        </HStack>

        <HStack alignItems="center" gap="2rem">
          <Heading as="h6" size="sm">
            Telefone:
          </Heading>
          <Text>{user.phone}</Text>
        </HStack>

        <HStack alignItems="center" gap="2rem">
          <Heading as="h6" size="sm">
            E-mail:
          </Heading>
          <Text>{user.email}</Text>
        </HStack>
      </Stack>
    </Stack>
  );
}
