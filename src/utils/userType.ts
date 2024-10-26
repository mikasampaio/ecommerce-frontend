import { UserType } from "@/services/user";

export const userTypeOptions = (type: UserType) => {
  switch (type) {
    case UserType.ADMIN:
      return "Administrador";
    case UserType.USER:
      return "Usuário";
    default:
      return "";
  }
};
