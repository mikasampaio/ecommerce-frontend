import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type InputTextProps = InputProps & {
  name: string;
  label: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

export default function InputText({
  name,
  label,
  placeholder,
  rightIcon,
  leftIcon,
  width,
  ...rest
}: InputTextProps) {
  const { control } = useFormContext();
  
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <Stack width={width || "100%"}>
            {label && (
              <FormLabel
                margin="0"
                fontWeight="normal"
                fontSize=".937rem"
                htmlFor={name}
              >
                {label}
              </FormLabel>
            )}

            <InputGroup>
              {leftIcon && (
                <InputLeftElement pointerEvents="none">
                  {leftIcon}
                </InputLeftElement>
              )}

              <Input
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                _focus={{
                  border: "0",
                }}
                focusBorderColor="primary"
                border="1px solid"
                borderColor={error?.message ? "red.500" : "gray.300"}
                {...rest}
              />

              {rightIcon && (
                <InputRightElement pointerEvents="none">
                  {rightIcon}
                </InputRightElement>
              )}
            </InputGroup>

            {error?.message && <Text color="error">{error.message}</Text>}
          </Stack>
        );
      }}
    />
  );
}
