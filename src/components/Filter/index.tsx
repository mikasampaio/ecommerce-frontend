import { HStack, Text, VStack } from "@chakra-ui/react";
import Select from "../Select";
import { AiOutlineClose } from "react-icons/ai";

export default function Filters() {
  return (
    <VStack
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      p="1.25rem"
    >
      <Text fontWeight={600} fontSize="1.5rem">
        Filtrar Produtos
      </Text>

      <HStack justifyContent={"space-between"} w="100%">
        <HStack width="40%">
          <Select
            name="size"
            placeholder="Tamanho"
            options={[
              { value: "small", label: "Pequeno" },
              { value: "medium", label: "Médio" },
              { value: "large", label: "Grande" },
            ]}
          />

          <Select
            name="category"
            placeholder="Categoria"
            options={[
              { value: "electronics", label: "Eletrônicos" },
              { value: "clothing", label: "Roupas" },
              { value: "accessories", label: "Acessórios" },
            ]}
          />
        </HStack>

        <HStack>
          <Text fontWeight={600}>Filtros aplicados:</Text>

          <HStack
            borderWidth="1px"
            borderColor="gray.300"
            px={4}
            py={2}
            borderRadius="full"
          >
            <Text>JAQUETAS</Text>
            <AiOutlineClose
              style={{
                cursor: "pointer",
              }}
            />
          </HStack>
        </HStack>
      </HStack>
    </VStack>
  );
}
