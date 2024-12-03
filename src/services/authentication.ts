import api from "./api";
import { User } from "./user";

export interface Login {
  email: string;
  password: string;
}

export class AuthenticationService {
  static async login(data: Login): Promise<User & { token: string }> {
    const response = await api.post<User & { token: string }>(`/session`, data);

    return response.data;
  }

  static async bearerToken({ token }: { token: string }) {
    const response = await api.post<User>("/session", undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}
