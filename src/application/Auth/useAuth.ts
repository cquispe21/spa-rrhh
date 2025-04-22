import { IAuth, IAuthResponse } from "../../domain/Auth/auth";
import AuthServices from "../../infraestructure/AuthRepository/AuthServices";

export default function useAuth() {
  const { AuthGet } = AuthServices();
  const Auth = async (auth: IAuth): Promise<IAuthResponse> =>  {
    try {
      return AuthGet(auth);
    } catch (error) {
      console.log(error);   
        throw new Error("Error en la autenticación");
    }
  };

  return { Auth };
}
