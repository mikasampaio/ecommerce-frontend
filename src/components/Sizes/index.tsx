import { HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

type SizeProps = {
  sizes: string[];
  width?: string;
  height?: string;
};

export default function Sizes({
  sizes,
  width = "15px",
  height = "15px",
}: SizeProps) {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <HStack w="100%">
      {sizes.map((size, index) => (
        <Stack
          key={index}
          justifyContent="center"
          alignItems="center"
          border={isActive === index ? "none" : "1px solid black"}
          padding="0.5"
          borderRadius="md"
          width={width}
          height={height}
          onClick={() => {
            setIsActive(index);
          }}
          backgroundColor={isActive === index ? "primary" : "transparent"}
          color={isActive === index ? "white" : "black"}
          cursor="pointer"
        >
          <Text>{size}</Text>
        </Stack>
      ))}
    </HStack>
  );
}
