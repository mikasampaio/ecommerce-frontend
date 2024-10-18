import {
  Grid,
  GridItem,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

export default function AddressProfile() {
  return (
    <Grid
      gap={6}
      border="1px solid"
      borderColor="gray.200"
      borderRadius=".3rem"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
      width={{ base: "100%", sm: "50%" }}
      padding="1rem"
    >
      <GridItem display="flex" justifyContent="space-between" colSpan={2}>
        <Heading as="h5" size="md">
          Endereço
        </Heading>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="ghost"
          />
          <MenuList>
            <MenuItem icon={<GoPencil fontSize="1rem" />}>Editar</MenuItem>
          </MenuList>
        </Menu>
      </GridItem>

      <Text color="gray.600">
        Rua, Número, Complemento, Cidade, Estado, CEP
      </Text>
    </Grid>
  );
}
