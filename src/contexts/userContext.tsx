import { ErrorHandler } from "@/errors/errorHandler";
import { LoginProps } from "@/schemas/login";
import api from "@/services/api";
import { AuthenticationService } from "@/services/authentication";
import { User } from "@/services/user";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextProps {
  user: User | null;
  signIn: (data: LoginProps) => Promise<User | void>;
  signOut: () => void;
  isLoading?: boolean;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const initialize = async () => {
    const token = localStorage.getItem("token") as string;

    if (token) {
      try {
        const response = await AuthenticationService.bearerToken({ token });

        api.interceptors.request.use((config) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        });

        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error: unknown) {
        console.log(error);
        signOut();
        ErrorHandler({
          error,
          defaultMessage: "Erro ao realizar login",
          toast,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const signIn = async (data: LoginProps) => {
    try {
      setIsLoading(true);
      const response = await AuthenticationService.login({
        email: data.email,
        password: data.password,
      });

      if (response) {
        setUser(response);
        api.interceptors.request.use((config) => {
          config.headers.Authorization = `Bearer ${response.token}`;
          return config;
        });
        localStorage.setItem("token", response.token);

        toast({
          position: "top-right",
          duration: 3000,
          isClosable: true,
          title: "Sucesso",
          description: "Login efetuado com sucesso",
          status: "success",
        });

        router.push("/home");
      }
    } catch (error) {
      ErrorHandler({ error, defaultMessage: "Erro ao realizar login", toast });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("token");

    router.push("/login");
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
