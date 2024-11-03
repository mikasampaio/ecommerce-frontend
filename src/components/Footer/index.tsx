import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="center"
      width="100%"
      p="1.25rem"
      bg="primary"
      color="white"
    >
      <Text>Todos os direitos reservados © 2023 - Store</Text>
    </Box>
  );
}
