import { UseToastOptions } from "@chakra-ui/react";
import { isAxiosError } from "axios";

interface IError {
  error: unknown;
  defaultMessage: string;
  toast: (message: UseToastOptions) => void;
}

export const ErrorHandler = ({ error, defaultMessage, toast }: IError) => {
  let message = defaultMessage;

  if (isAxiosError(error)) {
    message = error.response?.data?.message;
  }

  toast({
    position: "top-right",
    duration: 3000,
    isClosable: true,
    title: "Erro",
    description: message,
    status: "error",
  });
};
