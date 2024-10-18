import { FormProvider, useForm } from "react-hook-form";
import InputText from "@/components/Input";
import Button from "@/components/Button";
import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const methods = useForm();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

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
              name="email"
              label="E-mail"
              placeholder="example@example.com"
              leftIcon={<AiOutlineUser />}
            ></InputText>

            <InputText
              name="password"
              label="Senha"
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
              label="Entrar"
              onClick={() => {
                router.push("/home");
              }}
            ></Button>
          </VStack>
          <Text>
            Não possui uma conta?{" "}
            <Link color="primary" as="a" href="/cadastro">
              Criar uma conta!
            </Link>
          </Text>
        </VStack>
      </HStack>
    </FormProvider>
  );
}
