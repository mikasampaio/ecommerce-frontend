import Authenticated from "@/components/Authenticated";
import AddressProfile from "@/components/Profile/address";
import PersonalInformation from "@/components/Profile/personalInformation";
import { useUser } from "@/contexts/userContext";
import { UserType } from "@/services/user";
import { userTypeOptions } from "@/utils/userType";
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
  const { user } = useUser();

  return (
    <Authenticated>
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
          <Text color="gray.600">{user?.firstName + " " + user?.lastName}</Text>
          <Text color="gray.500">
            {userTypeOptions(user?.type as UserType)}
          </Text>
        </Stack>
      </HStack>
      <PersonalInformation />
      <AddressProfile />
    </Authenticated>
  );
}
