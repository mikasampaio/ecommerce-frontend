import { useRouter } from "next/navigation";
import { ButtonIcon, Container, ContainerItems } from "./styles";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "@chakra-ui/react";
import { useState } from "react";
import InputText from "../Input";

export default function Header() {
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
    {
      label: "Perfil",
      icon: <AiOutlineUser fontSize={"1.5rem"} />,
      url: "/perfil",
    },
  ];

  return (
    <Container>
      <Link href="/home">Página inicial</Link>

      <ContainerItems>
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

        {/* <Menu>
          <MenuButton
            aria-label="Options"
            icon={<AiOutlineUser />}
            variant="ghost"
            as={IconButton}
          />
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
                router.push("/login");
              }}
            >
              Sair
            </MenuItem>
          </MenuList>
        </Menu> */}
      </ContainerItems>
    </Container>
  );
}
