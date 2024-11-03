import { HStack, Stack } from "@chakra-ui/react";

type ColorProps = {
  colors: string[];
};

export default function Colors({ colors }: ColorProps) {
  console.log(colors);
  
  return (
    <HStack w="100%">
      {colors.map((color, index) => (
        <Stack
          key={index}
          width="15px"
          height="15px"
          backgroundColor={color}
          borderRadius="full"
          margin="0.5rem 0"
        />
      ))}
    </HStack>
  );
}
