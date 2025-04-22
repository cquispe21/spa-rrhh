import { IAuthServices } from "../../application/Auth/auth";
import { IAuth, IAuthResponse } from "../../domain/Auth/auth";
import AuthClient from "../../utils/configuration";

export default function AuthServices(): IAuthServices {

    const responseAuth : IAuthResponse = {
        token: "123123123213131321",
        resultado: true,
        mensaje: "123123"
    };


    const AuthGet = async (auth: IAuth):Promise<IAuthResponse> => {
        //const res = await AuthClient.post("Auth/login", auth).then((res) => res.data);
        console.log(responseAuth)
        const res = responseAuth;
        return res;
    };
    return { AuthGet };
}