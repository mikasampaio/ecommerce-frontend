import {
  Button as ButtonChakra,
  ButtonProps as ButtonCProps,
} from "@chakra-ui/react";

type ButtonProps = ButtonCProps & {
  label: string;
};

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <ButtonChakra
      color="white"
      bgColor={"primary"}
      _hover={{
        opacity: 0.9,
      }}
      w="100%"
      {...props}
    >
      {label}
    </ButtonChakra>
  );
}
