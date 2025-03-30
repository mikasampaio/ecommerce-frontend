import { Product } from "@/services/products";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../Card";

type MainProductProps = {
  products: Product[];
};

export default function MainProduct({ products }: MainProductProps) {
  return (
    <VStack spacing="1rem" w="100%" alignItems="flex-start" p="1.25rem">
      <Heading as="h3" size="md">
        Em destaque
      </Heading>

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
