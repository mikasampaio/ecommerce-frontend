import api from "./api";
import { Status } from "./types";

export interface Order {
  _id: string;
  name: string;
  status: Status;
}

export interface Items {
  product: string;
  quantity: number;
  size: string;
  color: string;
}

export interface CreateOrderData {
  items: Items[];
}

export class OrderService {
  static async get(): Promise<Order[]> {
    const response = await api.get<Order[]>("/order");

    return response.data;
  }

  static async getById(id: string): Promise<Order> {
    const response = await api.get<Order>("/order", {
      params: { id },
    });

    return response.data;
  }

  static async create(data: CreateOrderData): Promise<Order> {
    const response = await api.post<Order>("/order", data);

    return response.data;
  }

  static async update(
    data: Partial<CreateOrderData>,
    id: string
  ): Promise<Order> {
    const response = await api.put<Order>("/order", data, {
      params: { id },
    });

    return response.data;
  }

  static async delete(id: string): Promise<string> {
    const response = await api.delete("/order", {
      params: { id },
    });

    return response.data;
  }
}
