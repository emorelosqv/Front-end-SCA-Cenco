export type StatusAuth = "authenticating" | "not-authenticated" | "authenticated";

interface User {
    Identifacion: number;
    Nombres: string;
    Apellidos: string;
    Correo: string;
    Password: string;
    Rol:number;
    FechaCreacion: Date;
    
}

export interface IAuth {
    status: StatusAuth;
    user: null | User;
    token: null | string;
    refreshToken: null | string;
}

export interface ICreateUser {
    info: {
        identifacion: number;
        nombres: string;
        apellidos: string;
        correo: string;
        password: string;
        rol:number;
        fechaCreacion: Date;    
    },
}

export interface ILoginUser {
    Identificacion: number;
    Password: string;
}

