export interface IAuth {
    userName: string;
    password: string;
}


export interface IAuthResponse {
    token: string;
    resultado: boolean;
    mensaje: string;
}

