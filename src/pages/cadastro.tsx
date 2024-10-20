import { FormProvider, useForm } from "react-hook-form";
import InputText from "@/components/Input";
import Button from "@/components/Button";
import { HStack, Link, Text, useToast, VStack } from "@chakra-ui/react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterProps, RegisterSchema } from "@/schemas/register";
import { ErrorHandler } from "@/errors/errorHandler";
import { UserService, UserType } from "@/services/user";
import { useRouter } from "next/navigation";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const methods = useForm<RegisterProps>({
    resolver: zodResolver(RegisterSchema),
  });
  const { handleSubmit } = methods;

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const onSubmit = async (data: RegisterProps) => {
    try {
      await UserService.registerUser({
        ...data,
        password: data.confirmPassword,
        type: UserType.USER,
      });

      toast({
        position: "top-right",
        duration: 3000,
        isClosable: true,
        title: "Sucesso",
        description: "Cadastro realizado com sucesso",
        status: "success",
      });

      router.push("/login");
    } catch (error) {
      ErrorHandler({ error, defaultMessage: "Erro ao realizar cadastro", toast });
    }
  };

  return (
    <FormProvider {...methods}>
      <HStack w="100vw" h="100vh" p={{ base: "1rem", sm: "0" }}>
        <VStack
          width="100%"
          h="100%"
          display={{ base: "none", sm: "block" }}
          bgColor="#005eab"
        ></VStack>

        <VStack width={"100%"}>
          <VStack
            boxShadow={
              "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
            }
            borderRadius=".3rem"
            w={{ xs: "100%", sm: "60%" }}
            p={{ base: "1.5rem" }}
            gap=".6rem"
            alignItems="flex-start"
          >
            <Text fontWeight="bold" fontSize="2xl" textAlign="center" w="100%">
              Seja bem-vindo!
            </Text>
            <InputText
              name="firstName"
              label="Nome"
              leftIcon={<AiOutlineUser />}
            ></InputText>

            <InputText
              name="lastName"
              label="Sobrenome"
              leftIcon={<AiOutlineUser />}
            ></InputText>

            <InputText
              name="email"
              label="E-mail"
              placeholder="example@example.com"
              leftIcon={<AiOutlineMail />}
            ></InputText>

            <InputText
              name="password"
              label="Escolha a senha"
              type={isVisiblePassword ? "text" : "password"}
              placeholder="********"
              leftIcon={<AiOutlineLock />}
              rightIcon={
                isVisiblePassword ? (
                  <AiOutlineEye
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                  />
                )
              }
            />

            <InputText
              name="confirmPassword"
              label="Escolha a senha"
              type={isVisiblePassword ? "text" : "password"}
              placeholder="********"
              leftIcon={<AiOutlineLock />}
              rightIcon={
                isVisiblePassword ? (
                  <AiOutlineEye
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                  />
                )
              }
            />

            <Button
              label="Criar conta"
              onClick={handleSubmit(onSubmit)}
            ></Button>
          </VStack>

          <Text>
            Já possui uma conta?{" "}
            <Link color="primary" as="a" href="/login">
              Entrar!
            </Link>
          </Text>
        </VStack>
      </HStack>
    </FormProvider>
  );
}
