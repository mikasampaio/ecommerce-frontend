import { HStack, Text, VStack } from "@chakra-ui/react";
import Select from "../Select";
import { AiOutlineSearch } from "react-icons/ai";
import InputText from "../Input";
import { Size } from "@/services/products";

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
          <InputText
            name={"search"}
            label={""}
            placeholder="Pesquisar Produto"
            rightIcon={<AiOutlineSearch fontSize="1.5rem" />}
          />
          <Select
            name="size"
            placeholder="Tamanho"
            options={[
              {
                label: "PP",
                value: Size.PP,
              },
              {
                label: "P",
                value: Size.P,
              },
              {
                label: "M",
                value: Size.M,
              },
              {
                label: "G",
                value: Size.G,
              },
              {
                label: "GG",
                value: Size.GG,
              },
              {
                label: "XG",
                value: Size.XG,
              },
            ]}
          />
        </HStack>

        {/*  <HStack>
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
        </HStack> */}
      </HStack>
    </VStack>
  );
}
