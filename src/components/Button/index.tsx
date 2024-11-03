import {
  Button as ButtonChakra,
  ButtonProps as ButtonCProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ButtonProps = ButtonCProps & {
  label: string | ReactNode;
};

export default function Button({ label, w, ...props }: ButtonProps) {
  return (
    <ButtonChakra
      color="white"
      bgColor={"primary"}
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
