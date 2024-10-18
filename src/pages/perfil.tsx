import Authenticated from "@/components/Authenticated";
import AddressProfile from "@/components/Profile/address";
import PersonalInformation from "@/components/Profile/personalInformation";
import {
  Avatar,
  AvatarGroup,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

export default function Carrinho() {
  return (
    <Authenticated>
      <Stack paddingY="1rem" gap="1rem">
        <Heading as="h1" size="md">
          Meu Perfil
        </Heading>
        <HStack>
          <AvatarGroup>
            <Avatar
              bg="primary"
              size="lg"
              icon={<AiOutlineUser fontSize="1.5rem" />}
            />
          </AvatarGroup>

          <Stack>
            <Text color="gray.600">Nome do Usuário</Text>
            <Text color="gray.500">Tipo do usuário</Text>
          </Stack>
        </HStack>

        <PersonalInformation />
        <AddressProfile />
      </Stack>
    </Authenticated>
  );
}
