import Authenticated from "@/components/Authenticated";
import InputText from "@/components/Input";
import ProductCard from "@/components/Products/Card";
import { Product } from "@/services/products";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Favoritos() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  return (
    <Authenticated>
      <Box height="calc(100vh - 65px)" bg="gray.secondary" p="2.5rem">
        <VStack
          alignItems="flex-start"
          bg="white"
          borderRadius=".5rem"
          p="1.5rem"
          h="100%"
          gap="0.5rem"
        >
          <HStack justifyContent="space-between" w="100%">
            <Heading as="h1" size="md">
              Favoritos
            </Heading>

            <InputText
              name="searchFavorite"
              label=""
              placeholder="Pesquisar..."
              rightIcon={<AiOutlineSearch fontSize="1.5rem" />}
            />
          </HStack>

          <HStack h="100%" w="100%">
            {favorites.length > 0 ? (
              favorites.map((product) => (
                <ProductCard key={product._id} product={product} isFavorited />
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
    </Authenticated>
  );
}
