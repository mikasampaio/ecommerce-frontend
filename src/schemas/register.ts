import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string({
      required_error: "Nome é obrigatório",
    }),
    lastName: z.string({
      required_error: "Sobrenome é obrigatório",
    }),
    email: z
      .string({
        required_error: "E-mail é obrigatório",
      })
      .email({
        message: "E-mail inválido",
      }),
    password: z
      .string({
        required_error: "Senha é obrigatória",
      })
      .min(8, {
        message: "A senha deve ter no mínimo 8 caracteres",
      }),
    confirmPassword: z.string({
      required_error: "Confirmação de senha é obrigatória",
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { message: "As senhas não conferem", path: ["confirmPassword"] }
  );

export type RegisterProps = z.infer<typeof RegisterSchema>;
