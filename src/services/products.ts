import api from "./api";
import { Status } from "./types";

export interface Category {
  _id: string;
  name: string;
  status: Status;
}

export enum Size {
  PP = "PP",
  P = "P", // Pequeno
  M = "M", // Médio
  G = "G", // Grande
  GG = "GG", // Extra Grande
  XG = "XG", // Duplo Extra Grande
}
export interface Variant {
  name?: string;
  path?: string[];
  size: Size;
  quantity: number;
  color: string;
}

export interface Product {
  _id?: string;
  name: string;
  price: number;
  discount: number | null;
  category: Category;
  description: string;
  variants: Variant[];
  status: Status;
}

export interface CreateProductData {
  name: string;
  price: number;
  discount: number | null;
  category: Category;
  variants: Variant[];
}

export class ProductService {
  static async get(): Promise<Product[]> {
    const response = await api.get<Product[]>("/product");

    return response.data;
  }

  static async getById(id: string): Promise<Product> {
    const response = await api.get<Product>("/product", {
      params: { id },
    });

    return response.data;
  }

  static async create(data: CreateProductData): Promise<Product> {
    const response = await api.post<Product>("/product", data);

    return response.data;
  }

  static async update(
    data: Partial<CreateProductData>,
    id: string
  ): Promise<Product> {
    const response = await api.put<Product>("/product", data, {
      params: { id },
    });

    return response.data;
  }

  static async delete(id: string): Promise<string> {
    const response = await api.delete("/product", {
      params: { id },
    });

    return response.data;
  }
}
