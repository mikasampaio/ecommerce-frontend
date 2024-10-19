import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import InputStepper from "./InputStepper";
import { GoTrash } from "react-icons/go";
import { formatCurrency } from "@/utils/formatCurrency";
import { useFormContext } from "react-hook-form";

interface ProductCartProps {
  products: {
    _id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
  }[];
}

export default function ProductCart({ products }: ProductCartProps) {
  const methods = useFormContext();
  const { watch } = methods;

  return (
    <Grid
      templateColumns={"repeat(1, 1fr)"}
      gap={{
        base: "1rem",
        md: "1.5rem",
      }}
      border="1px solid"
      borderColor="gray.200"
      borderRadius=".3rem"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
      width={{
        base: "100%",
        md: "60%",
      }}
    >
      <GridItem
        colSpan={{
          base: 1,
          md: 2,
        }}
      >
        <Heading
          as="h5"
          size={{
            base: "sm",
            md: "md",
          }}
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          padding="1rem"
        >
          Produtos
        </Heading>
      </GridItem>

      <Stack padding="1rem">
        {products.map((product) => (
          <Stack
            key={product._id}
            direction={{
              base: "row",
              md: "row",
            }}
            gap="1rem"
            borderBottom="1px solid"
            borderBottomColor="gray.300"
            paddingBottom="2"
          >
            <Image
              src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png"
              width={{
                base: "4.5rem",
                sm: "6.5rem",
              }}
              borderRadius="xl"
              backgroundColor="gray.200"
            />

            <VStack w="full">
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                w="full"
              >
                <Heading as="h6" size="sm">
                  {product.name}
                </Heading>
                <Heading color="gray.600" size="sm">
                  {formatCurrency(product.price * watch("quantity") || 0)}
                </Heading>
              </HStack>
              <HStack
                justifyContent={{
                  base: "space-between",
                  md: "flex-start",
                }}
                w="full"
              >
                <Button variant="solid" colorScheme="red">
                  <GoTrash />
                </Button>

                <InputStepper />
              </HStack>
            </VStack>
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
}
