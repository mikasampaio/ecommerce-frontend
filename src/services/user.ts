import api from "./api";
import { Product } from "./products";
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
  favorites?: string[];
}

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
  password: string;
}

export interface FavoriteProduct {
  _id: string;
  name: string;
  price: number;
  discount: number;
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

  static async getFavorites(): Promise<Product[]> {
    const response = await api.get("/user/favorites");

    return response.data;
  }

  static async addFavorites(product: string): Promise<User> {
    const response = await api.put("/user/favorites", undefined, {
      params: {
        product,
      },
    });

    return response.data;
  }
}
