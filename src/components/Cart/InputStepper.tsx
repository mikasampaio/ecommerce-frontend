import { Button, HStack, useNumberInput, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface InputStepperProps {
  max?: number;
  defaultValue?: number;
}

export default function InputStepper({ max, defaultValue = 0 }: InputStepperProps) {
  const methods = useFormContext();
  const { setValue } = methods;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      min: 1,
      max,
      defaultValue,
    });

  const increment = getIncrementButtonProps();
  const decrement = getDecrementButtonProps();
  const { value } = getInputProps();

  useEffect(() => {
    setValue("quantity", value);
  }, [setValue, value]);

  return (
    <HStack
      maxW="200px"
      gap="0"
      border="1px solid"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Button variant="ghost" {...decrement}>
        -
      </Button>

      <Text paddingX="4">{value}</Text>

      <Button variant="ghost" {...increment}>
        +
      </Button>
    </HStack>
  );
}
