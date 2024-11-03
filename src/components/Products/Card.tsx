import { Product } from "@/services/products";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Button as CButton,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";
import Colors from "../Colors";
import Button from "../Button";

type CardProps = {
  product: Product;
  isFavorited?: boolean;
};

export default function ProductCard({ product, isFavorited }: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <VStack
      width="250px"
      borderRadius="xl"
      overflow="hidden"
      gap={0}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
    >
      <Stack width="100%" position="relative" backgroundColor="gray.primary">
        <Image
          src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png"
          width={{
            base: "4.5rem",
            sm: "100%",
          }}
        />

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
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite || isFavorited ? (
            <MdFavorite fontSize="1.3rem" color={"#c53030"} />
          ) : (
            <MdFavoriteBorder fontSize="1.3rem" />
          )}
        </CButton>
      </Stack>

      {product.stock.map((data) => (
        <HStack
          justifyContent="space-between"
          alignItems="end"
          width="100%"
          height="100%"
          p={4}
          background="white"
          key={data._id}
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

            <Colors colors={[data.color as string]} />
          </VStack>

          <Button
            backgroundColor="primary"
            color="white"
            width="40px"
            height="40px"
            padding={0}
            label={<MdOutlineShoppingCart fontSize="1.3rem" />}
          ></Button>
        </HStack>
      ))}
    </VStack>
  );
}
