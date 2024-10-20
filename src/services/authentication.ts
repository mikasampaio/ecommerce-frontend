import api from "./api";

export interface Login {
  email: string;
  password: string;
}

export class AuthenticationService {
  static async login(data: Login) {
    const response = await api.post(`/session`, data);

    return response.data;
  }
}
