import api from "./api";
import { Status } from "./types";

export interface Product {
  _id: string
  name: string
  price: number
  category: Category
  stock: Stock[]
  status: Status
}

export interface Category {
  _id: string
  name: string
  status: Status
}

export interface Stock {
  _id: number
  name: string
  quantity: number
  size: string[]
  color: string[]
  discount: number | null
  path: string[]
  description: string
}

export class ProductService {
  static async get(): Promise<Product[]> {
    const response = await api.get<Product[]>("/product");

    return response.data;
  }
}
