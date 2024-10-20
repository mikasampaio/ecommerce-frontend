import api from "./api";

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
}

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
  password: string;
}

export class UserService {
  static async registerUser(data: RegisterUser): Promise<User> {
    const response = await api.post("/user", data);

    return response.data;
  }
}
