import {
  Button,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatCurrency } from "@/utils/formatCurrency";

interface OrderSummaryProps {
  products: {
    _id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
  }[];
}

export default function OrderSummary({ products }: OrderSummaryProps) {
  const orderSummary = products.reduce(
    (acc, product) => {
      return {
        total: acc.total + product.price * product.quantity,
        quantity: acc.quantity + product.quantity,
      };
    },
    {
      total: 0,
      quantity: 0,
    }
  );

  return (
    <Stack
      gap="1rem"
      border="1px solid"
      borderColor="gray.200"
      borderRadius=".3rem"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
      width={{
        base: "100%",
        md: "40%",
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
        Resumo do pedido
      </Heading>

      <Stack padding="1rem" gap="1.5rem">
        <Stack>
          <Heading as="h6" size="sm">
            Método de pagamento
          </Heading>

          <RadioGroup defaultValue="PIX">
            <Stack spacing={4}>
              <Radio value="PIX">PIX</Radio>
              <Radio value="CARD">Cartão de Crédito ou Débito</Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h6" size="sm">
            Produtos
          </Heading>

          <HStack justifyContent="space-between">
            <Text>Total de itens: {orderSummary.quantity}</Text>
            <Text>{formatCurrency(orderSummary.total)}</Text>
          </HStack>
        </Stack>

        <HStack
          justifyContent="space-between"
          borderTop="1px solid"
          borderTopColor="gray.300"
          paddingTop="1rem"
        >
          <Heading as="h6" size="sm">
            Total
          </Heading>
          <Text fontWeight="semibold">
            {formatCurrency(orderSummary.total)}
          </Text>
        </HStack>

        <Button variant="solid" colorScheme="green">
          Finalizar pedido
        </Button>
      </Stack>
    </Stack>
  );
}
