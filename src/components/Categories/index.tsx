import { Category, CategoryService } from "@/services/categories";
import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isClicked, setIsClicked] = useState(0);

  const getCategories = async () => {
    try {
      const response = await CategoryService.get();

      setCategories(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <HStack p="1.25rem" gap={6}>
      {categories.map((category, index) => (
        <VStack key={category._id}>
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
