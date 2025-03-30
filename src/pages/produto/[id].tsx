import { useRouter } from "next/router";
import Authenticated from "@/components/Authenticated";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Product, ProductService } from "@/services/products";
import { formatCurrency } from "@/utils/formatCurrency";
import Colors from "@/components/Colors";
import Sizes from "@/components/Sizes";
import InputStepper from "@/components/Cart/InputStepper";
import Button from "@/components/Button";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { UserService } from "@/services/user";
import { useUser } from "@/contexts/userContext";

export default function AboutProduct() {
  const { query } = useRouter();
  const productId = query.id as string;
  const { user } = useUser();

  const toast = useToast();

  const [product, setProduct] = useState<Product>();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      const response = await ProductService.getById(productId);
      setProduct(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [productId]);

  useEffect(() => {
    setIsFavorited(
      user?.favorites?.includes(product?._id as string) as boolean
    );
  }, [product, user]);

  const handleFavoriteProduct = async (data?: string) => {
    if (!user)
      return toast({
        title: "Favorito",
        description: "Usuário não autenticado",
        status: "warning",
        duration: 3000,
      });

    try {
      const response = await UserService.addFavorites(data as string);
      toast({
        title: "Favorito",
        description: "Produto favoritado com sucesso",
        status: "success",
        duration: 3000,
      });

      setIsFavorited(
        response.favorites?.includes(product?._id as string) as boolean
      );
    } catch {
      toast({
        title: "Favorito",
        description: "Erro ao favoritar produto",
        status: "error",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    setSelectedColor(product?.variants?.[0].color as string);
  }, [product]);

  return (
    <Authenticated>
      <Box
        height={{ base: "auto", md: "calc(100vh - 65px)" }}
        bg="gray.secondary"
        p={{ base: "1rem", md: "2.5rem" }}
      >
        <HStack
          alignItems="flex-start"
          bg="white"
          borderRadius=".5rem"
          p="1.5rem"
          h="100%"
          w="100%"
          gap="1rem"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Grid
            w={{ base: "100%", md: "50%" }}
            h="100%"
            templateRows="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={12}
              rowSpan={{ base: 12, md: 8 }}
              bg="blue.100"
            />
            <GridItem colSpan={4} rowSpan={{ base: 6, md: 12 }} bg="blue.100" />
            <GridItem colSpan={4} rowSpan={{ base: 6, md: 12 }} bg="blue.100" />
            <GridItem colSpan={4} rowSpan={{ base: 6, md: 12 }} bg="blue.100" />
          </Grid>

          <VStack
            w={{ base: "100%", md: "50%" }}
            alignItems="flex-start"
            gap={5}
          >
            <HStack w="full" justifyContent="space-between">
              <Heading as="h1" size="lg">
                Casaco feminino
              </Heading>

              {isFavorited ? (
                <MdFavorite
                  fontSize="2rem"
                  color={"#c53030"}
                  onClick={() => handleFavoriteProduct(product?._id as string)}
                  cursor="pointer"
                />
              ) : (
                <MdFavoriteBorder
                  fontSize="2rem"
                  onClick={() => handleFavoriteProduct(product?._id as string)}
                  cursor="pointer"
                />
              )}
            </HStack>

            <HStack>
              <Text
                fontWeight="600"
                fontSize="xl"
                textDecoration={product?.discount ? "line-through" : "none"}
              >
                {formatCurrency(product?.price as number)}
              </Text>

              {product?.discount && (
                <Text fontWeight="600" color="red.500">
                  {formatCurrency(
                    product?.price - (product?.discount as number) * 100
                  )}
                </Text>
              )}
            </HStack>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              convallis neque, at sagittis velit. In hac habitasse platea
              dictumst. Vestibulum non velit at velit eleifend dignissim.
            </Text>

            <VStack alignItems="flex-start">
              <Heading as="h3" size="sm">
                Cores
              </Heading>

              <Colors
                colors={product?.variants?.map(({ color }) => color) || []}
                width="30px"
                height="30px"
                setSelectedColor={setSelectedColor}
              />
            </VStack>

            <VStack alignItems="flex-start">
              <Heading as="h3" size="sm">
                Tamanho
              </Heading>

              <Sizes
                sizes={product?.variants?.map(({ size }) => size) || []}
                width="30px"
                height="30px"
              />
            </VStack>

            <VStack alignItems="flex-start">
              <Heading as="h3" size="sm">
                Quantidade
              </Heading>

              <HStack>
                <InputStepper
                  defaultValue={1}
                  max={
                    product?.variants?.find(
                      ({ color }) => color === selectedColor
                    )?.quantity
                  }
                />
                <Text>
                  Há{" "}
                  <b>
                    {
                      product?.variants?.find(
                        ({ color }) => color === selectedColor
                      )?.quantity
                    }{" "}
                    itens
                  </b>{" "}
                  disponíveis
                </Text>
              </HStack>
            </VStack>

            <HStack w="full" flexDirection={{ base: "column", md: "row" }}>
              <Button label="Comprar agora" fontSize={{ base: "sm" }} />

              <Button
                label="Adicionar ao carrinho"
                primary={false}
                fontSize={{ base: "sm" }}
              />
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Authenticated>
  );
}
