export interface IAuthServices {
    AuthGet: (auth: IAuth) => Promise<IAuthResponse>;
    AuthRegister: (auth: IAuth) => Promise<IAuthResponse>;
}