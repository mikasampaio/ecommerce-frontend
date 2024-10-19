import Authenticated from "@/components/Authenticated";
import DeliveryInformation from "@/components/Cart/DeliveryInformation";
import OrderSummary from "@/components/Cart/OrderSummary";
import ProductCart from "@/components/Cart/Products";
import { Stack } from "@chakra-ui/react";

export default function Carrinho() {
  const user = {
    _id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123-456-7890",
    address: "123 Main St, City, State, ZIP",
  };

  const products = [
    {
      _id: 1,
      name: "Headphone",
      price: 19.99,
      color: "#34b4d1",
      quantity: 2,
    },
    {
      _id: 1,
      name: "Product 1",
      price: 56.99,
      color: "#34b4d1",
      quantity: 5,
    },
    {
      _id: 1,
      name: "Product 1",
      price: 19.99,
      color: "#34b4d1",
      quantity: 2,
    },
  ];

  return (
    <Authenticated>
      <Stack
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems="flex-start"
        gap="1.5rem"
      >
        <ProductCart products={products} />
        <OrderSummary products={products} />
      </Stack>

      <DeliveryInformation user={user} />
    </Authenticated>
  );
}
