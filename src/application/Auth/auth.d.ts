export interface IAuthServices {
    AuthGet: (auth: IAuth) => Promise<IAuthResponse>;
}