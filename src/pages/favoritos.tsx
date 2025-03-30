import Authenticated from "@/components/Authenticated";
import InputText from "@/components/Input";
import FavoriteProducts from "@/components/Products/FavoriteProducts";
import { Product } from "@/services/products";
import { UserService } from "@/services/user";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

export default function Favoritos() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const methods = useForm();
  const { watch } = methods;

  const getFavorites = async () => {
    try {
      const response = await UserService.getFavorites({
        search: watch("search"),
      });

      setFavorites(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getFavoriteDebounce = setTimeout(() => {
      getFavorites();
    }, 500);

    return () => clearTimeout(getFavoriteDebounce);
  }, [watch("search")]);

  return (
    <Authenticated>
      <FormProvider {...methods}>
        <Box minH="calc(100vh - 65px)" bg="gray.secondary" p="2.5rem">
          <VStack
            alignItems="flex-start"
            bg="white"
            borderRadius=".5rem"
            p="1.5rem"
            h="100%"
            gap="1.5rem"
          >
            <HStack justifyContent="space-between" w="100%">
              <Heading as="h1" size="md">
                Favoritos
              </Heading>

              <Box>
                <InputText
                  name="search"
                  label=""
                  placeholder="Pesquisar..."
                  rightIcon={<AiOutlineSearch fontSize="1.5rem" />}
                />
              </Box>
            </HStack>

            <HStack
              h="100%"
              w="100%"
              gap="2rem"
              justifyContent={{ sm: "space-between", md: "initial" }}
              flexWrap="wrap"
            >
              {favorites.length > 0 ? (
                favorites.map((product) => (
                  <FavoriteProducts
                    key={product._id}
                    product={product}
                    isFavorited
                    refresh={getFavorites}
                  />
                ))
              ) : (
                <Center w="100%">
                  <Text size="sm" color="gray.400" fontWeight="300">
                    Nenhum produto favoritado.
                  </Text>
                </Center>
              )}
            </HStack>
          </VStack>
        </Box>
      </FormProvider>
    </Authenticated>
  );
}
