import { useRouter } from "next/navigation";
import { ButtonIcon } from "./styles";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import {
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import InputText from "../Input";
import { MdLogout } from "react-icons/md";
import { useUser } from "@/contexts/userContext";

export default function Header() {
  const { signOut } = useUser();
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);

  const options = [
    {
      label: "Pesquisa",
      icon: <AiOutlineSearch fontSize={"1.5rem"} />,
      url: "",
      onClick: () => {
        setShowSearch(!showSearch);
      },
    },
    {
      label: "Favoritos",
      icon: <AiOutlineHeart fontSize={"1.5rem"} />,
      url: "/favoritos",
    },
    {
      label: "Carrinho",
      icon: <AiOutlineShoppingCart fontSize={"1.5rem"} />,
      url: "/carrinho",
    },
  ];

  return (
    <HStack
      position="fixed"
      zIndex={1}
      bg="white"
      w="100%"
      justifyContent="space-between"
      padding="1.25rem"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Link href="/home">Página inicial</Link>

      <HStack gap="1.5rem">
        {options.map((option) =>
          option.label == "Pesquisa" ? (
            showSearch ? (
              <InputText
                name={"search"}
                label={""}
                placeholder="Pesquisar Produto"
                rightIcon={<AiOutlineSearch fontSize="1.5rem" />}
              />
            ) : (
              <ButtonIcon onMouseDown={option.onClick}>
                {option.icon}
              </ButtonIcon>
            )
          ) : (
            <ButtonIcon
              key={option.label}
              onClick={() => {
                router.push(option?.url as string);
              }}
            >
              {option.icon}
            </ButtonIcon>
          )
        )}

        <Menu>
          <MenuButton>
            <AiOutlineUser fontSize={"1.5rem"} />
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<AiOutlineUser />}
              onClick={() => {
                router.push("/perfil");
              }}
            >
              Perfil
            </MenuItem>
            <MenuItem
              icon={<MdLogout />}
              onClick={() => {
                signOut();
              }}
            >
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
}
