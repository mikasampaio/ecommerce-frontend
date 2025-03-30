import { Category, CategoryService } from "@/services/categories";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormProvider, useFormContext } from "react-hook-form";

export default function Categories() {
  const methods = useFormContext();
  const { setValue, watch } = methods;
  const [categories, setCategories] = useState<Category[]>([]);

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
    <FormProvider {...methods}>
      <HStack p="1.25rem" gap={6}>
        {categories.map((category) => (
          <VStack key={category._id}>
            <Box
              w="100px"
              h="100px"
              color="white"
              borderRadius="full"
              borderWidth={watch("category") === category._id ? "3px" : "none"}
              borderColor={
                watch("category") === category._id ? "primary" : "none"
              }
              cursor="pointer"
              onClick={() => {
                setValue("category", category._id);
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
    </FormProvider>
  );
}
