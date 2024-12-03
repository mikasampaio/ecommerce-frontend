import {
  Button as ButtonChakra,
  ButtonProps as ButtonCProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ButtonProps = ButtonCProps & {
  label: string | ReactNode;
  primary?: boolean;
};

export default function Button({
  label,
  primary = true,
  w,
  ...props
}: ButtonProps) {
  return (
    <ButtonChakra
      color="white"
      bgColor={primary ? "primary" : "transparent"}
      border={primary ? "none" : "1px solid"}
      borderColor={primary ? "none" : "primary"}
      textColor={primary ? "white" : "primary"}
      _hover={{
        opacity: 0.9,
      }}
      w={w || "100%"}
      {...props}
    >
      {label}
    </ButtonChakra>
  );
}
