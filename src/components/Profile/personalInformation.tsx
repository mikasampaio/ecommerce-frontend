import InputText from "@/components/Input";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

export default function PersonalInformation() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={{
        base: "1rem",
        md: "1.5rem",
      }}
      border="1px solid"
      borderColor="gray.200"
      borderRadius=".3rem"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
      width="100%"
      padding="1rem"
    >
      <GridItem
        colSpan={{
          base: 1,
          md: 2,
        }}
      >
        <Heading as="h5" size="md">
          Informações Pessoais
        </Heading>
      </GridItem>

      <InputText
        name="firstName"
        label="Nome"
        leftIcon={<AiOutlineUser />}
      ></InputText>

      <InputText
        name="lastName"
        label="Sobrenome"
        leftIcon={<AiOutlineUser />}
      ></InputText>

      <InputText
        name="email"
        label="E-mail"
        placeholder="example@example.com"
        leftIcon={<AiOutlineMail />}
      ></InputText>
    </Grid>
  );
}
