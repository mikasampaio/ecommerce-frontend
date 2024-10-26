import api from "./api";
import { Status } from "./types";

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
  status: Status;
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
