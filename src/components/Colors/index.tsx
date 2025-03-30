import { Box, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";

type ColorProps = {
  colors: string[];
  width?: string;
  height?: string;
  setSelectedColor?: (color: string) => void;
  isView?: boolean;
};

export default function Colors({
  colors,
  width = "15px",
  height = "15px",
  setSelectedColor,
  isView = false,
}: ColorProps) {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <HStack w="100%">
      {colors.map((color, index) => (
        <Stack
          key={index}
          justifyContent="center"
          alignItems="center"
          border={isActive === index ? "1px solid black" : "none"}
          padding="0.5"
          borderRadius="full"
          width={width}
          height={height}
          onClick={() => {
            if (isView) return;
            setIsActive(index);
            setSelectedColor?.(color);
          }}
          cursor={isView ? "auto" : "pointer"}
        >
          <Box
            width="100%"
            height="100%"
            backgroundColor={color}
            borderRadius="full"
          />
        </Stack>
      ))}
    </HStack>
  );
}
