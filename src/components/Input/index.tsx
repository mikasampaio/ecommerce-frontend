import {
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
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
      }) => (
        <>
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

          {error?.message && (
            <FormErrorMessage>{error.message}</FormErrorMessage>
          )}
        </>
      )}
    />
  );
}
