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
  static async get(): Promise<User[]> {
    const response = await api.get<User[]>("/user");

    return response.data;
  }

  static async getUserById(id: string): Promise<User> {
    const response = await api.get<User>(`/user/`, {
      params: { id },
    });

    return response.data;
  }

  static async updateUser(data: Partial<User>, id: string): Promise<User> {
    const response = await api.put(`/user`, data, {
      params: { id },
    });

    return response.data;
  }

  static async deleteUser(id: string): Promise<string> {
    const response = await api.delete(`/user`, {
      params: { id },
    });

    return response.data;
  }

  static async registerUser(data: RegisterUser): Promise<User> {
    const response = await api.post("/user", data);

    return response.data;
  }
}
