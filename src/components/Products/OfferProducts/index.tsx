import { Product } from "@/services/products";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../Card";
import { BiSolidOffer } from "react-icons/bi";

type OfferProductProps = {
  products: Product[];
};

export default function OfferProduct({ products }: OfferProductProps) {
  return (
    <VStack
      spacing="1rem"
      backgroundColor="gray.secondary"
      w="100%"
      alignItems="flex-start"
      p="1.25rem"
    >
      <HStack gap={4}>
        <BiSolidOffer fontSize="2.5rem" />
        <Heading as="h3" size="md">
          Ofertas do dia
        </Heading>
      </HStack>

      <HStack w="100%">
        {!products.length ? (
          <Text w="100%">Nenhum resultado encontrado</Text>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </HStack>
    </VStack>
  );
}
