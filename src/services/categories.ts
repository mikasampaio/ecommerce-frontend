import api from "./api";
import { Status } from "./types";

export interface Category {
  _id: string;
  name: string;
  status: Status;
}

export interface CreateCategoryData {
  name: string;
}

export class CategoryService {
  static async get(): Promise<Category[]> {
    const response = await api.get<Category[]>("/category");

    return response.data;
  }

  static async getById(id: string): Promise<Category> {
    const response = await api.get<Category>("/category", {
      params: { id },
    });

    return response.data;
  }

  static async create(data: CreateCategoryData): Promise<Category> {
    const response = await api.post<Category>("/category", data);

    return response.data;
  }

  static async update(
    data: Partial<CreateCategoryData>,
    id: string
  ): Promise<Category> {
    const response = await api.put<Category>("/category", data, {
      params: { id },
    });

    return response.data;
  }

  static async delete(id: string): Promise<string> {
    const response = await api.delete("/category", {
      params: { id },
    });

    return response.data;
  }
}
