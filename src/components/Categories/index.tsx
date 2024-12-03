import { Category, CategoryService } from "@/services/categories";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
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

  console.log(categories);

  return (
    <HStack p="1.25rem" gap={6}>
      {categories.map((category, index) => (
        <VStack key={category._id}>
          <Box
            w="100px"
            h="100px"
            color="white"
            borderRadius="full"
            borderWidth={isClicked === index ? "3px" : "none"}
            borderColor={isClicked === index ? "primary" : "none"}
            cursor="pointer"
            onClick={() => {
              setIsClicked(index);
            }}
            overflow="hidden"
            objectFit={"cover"}
            objectPosition="top"
          >
            <Image src={category.url} alt={category.name} />
          </Box>

          <Text>{category.name}</Text>
        </VStack>
      ))}
    </HStack>
  );
}
