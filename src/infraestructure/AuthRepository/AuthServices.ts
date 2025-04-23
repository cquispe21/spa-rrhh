import { IAuthServices } from "../../application/Auth/auth";
import { IAuth, IAuthResponse } from "../../domain/Auth/auth";
import AuthClient from "../../utils/configuration";

export default function AuthServices(): IAuthServices {

   

    const AuthGet = async (auth: IAuth):Promise<IAuthResponse> => {
   
        const res = await AuthClient.post("auth/login", auth).then((res) => res.data);
        return res;
    };


    const AuthRegister = async (auth: IAuth):Promise<IAuthResponse> => {
        const res = await AuthClient.post("auth/register", auth).then((res) => res.data);
        return res;
    };
    return { AuthGet,AuthRegister};
}