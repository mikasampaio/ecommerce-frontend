import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Categories() {
  const [isClicked, setIsClicked] = useState(0);

  const categories = [
    {
      id: 1,
      name: "Cabelo",
    },
    {
      id: 2,
      name: "Barba",
    },
    {
      id: 3,
      name: "Maquiagem",
    },
    {
      id: 4,
      name: "Depilação",
    },
    {
      id: 5,
      name: "Higiene",
    },
    {
      id: 6,
      name: "Estética",
    },
    {
      id: 7,
      name: "Saúde",
    },
    {
      id: 8,
      name: "Beleza",
    },
  ];

  return (
    <HStack p="1.25rem" gap={6}>
      {categories.map((category, index) => (
        <VStack key={category.id}>
          <Center
            w="90px"
            h="90px"
            bg="gray.300"
            color="white"
            borderRadius="full"
            borderWidth={isClicked === index ? "3px" : "none"}
            borderColor={isClicked === index ? "primary" : "none"}
            p={4}
            cursor="pointer"
            onClick={() => {
              setIsClicked(index);
            }}
          />
          <Text>{category.name}</Text>
        </VStack>
      ))}
    </HStack>
  );
}
