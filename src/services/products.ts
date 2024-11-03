import api from "./api";
import { Status } from "./types";

export interface Category {
  _id: string;
  name: string;
  status: Status;
}

export enum Size {
  S = "S", // Pequeno
  M = "M", // Médio
  L = "L", // Grande
  XL = "XL", // Extra Grande
  XXL = "XXL", // Duplo Extra Grande
}

export interface Color {
  name: string;
  hex: string;
}

export interface Variation {
  name?: string;
  size?: Size;
  quantity?: number;
  path?: string[];
  description?: string;
}

export interface Stock {
  _id?: number;
  color?: string;
  variations?: Variation[];
  status?: Status;
}

export interface Product {
  _id?: string;
  name: string;
  price: number;
  discount: number | null;
  category: Category;
  stock: Stock[];
  status: Status;
}

export class ProductService {
  static async get(): Promise<Product[]> {
    const response = await api.get<Product[]>("/product");

    return response.data;
  }
}
