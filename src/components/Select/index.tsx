import { Select as CSelect, SelectProps, Stack, Text } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

type InputTextProps = SelectProps & {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
};

export default function Select({
  name,
  options,
  placeholder,
  ...rest
}: InputTextProps) {
  const selectOptions = [
    {
      value: "",
      label: "Nenhum",
    },
    ...options.map((option) => ({
      value: option.value,
      label: option.label,
    })),
  ];

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
          <Stack width="100%">
            <CSelect
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
            >
              {selectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </CSelect>

            {error?.message && <Text color="error">{error.message}</Text>}
          </Stack>
        );
      }}
    />
  );
}
