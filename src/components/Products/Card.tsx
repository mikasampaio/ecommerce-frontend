import { Product } from "@/services/products";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Box,
  Button as CButton,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";
import Colors from "../Colors";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";
import { UserService } from "@/services/user";

type CardProps = {
  product: Product;
  isFavorited?: boolean;
};

export default function ProductCard({ product, isFavorited }: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const { user } = useUser();

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

      setIsFavorite(
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
    setIsFavorite(user?.favorites?.includes(product?._id as string) as boolean);
  }, [product, user]);

  return (
    <Box position="relative">
      <CButton
        variant="outline"
        backgroundColor="#FFFFFF"
        borderRadius="full"
        position="absolute"
        top="1rem"
        right="1rem"
        width="40px"
        height="40px"
        padding={0}
        onClick={() => handleFavoriteProduct(product._id)}
      >
        {isFavorite || isFavorited ? (
          <MdFavorite fontSize="1.3rem" color={"#c53030"} />
        ) : (
          <MdFavoriteBorder fontSize="1.3rem" />
        )}
      </CButton>

      <VStack
        width="250px"
        borderRadius="xl"
        overflow="hidden"
        gap={0}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        cursor="pointer"
        onClick={() => router.push(`/produto/${product._id}`)}
      >
        <Stack width="100%" backgroundColor="gray.primary">
          <Image
            src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png"
            width={{
              base: "4.5rem",
              sm: "100%",
            }}
          />
        </Stack>

        <HStack
          justifyContent="space-between"
          alignItems="end"
          width="100%"
          height="100%"
          p={4}
          background="white"
        >
          <VStack alignItems="flex-start">
            <Text fontWeight="400">{product.name}</Text>

            <HStack>
              <Text
                fontWeight="600"
                fontSize="lg"
                textDecoration={product.discount ? "line-through" : "none"}
              >
                {formatCurrency(product.price)}
              </Text>

              {product.discount && (
                <Text fontWeight="600" color="red.500">
                  {formatCurrency(
                    product.price - (product.discount as number) * 100
                  )}
                </Text>
              )}
            </HStack>

            <Colors
              colors={product.variants.map(({ color }) => color)}
              isView
            />
          </VStack>
        </HStack>
      </VStack>

      <Button
        backgroundColor="primary"
        color="white"
        width="40px"
        height="40px"
        padding={0}
        position="absolute"
        bottom="1rem"
        right="1rem"
        label={<MdOutlineShoppingCart fontSize="1.3rem" />}
      ></Button>
    </Box>
  );
}
