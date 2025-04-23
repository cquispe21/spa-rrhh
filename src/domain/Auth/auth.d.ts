export interface IAuth {
    username: string;
    password: string;
}

export interface IAuthRegister {
    idRol: number;
    email: string;
    username: string;
    password: string;
}



export interface IAuthResponse {
    idRol: number;
    email: string;
    username: string;
    token: string;
}

