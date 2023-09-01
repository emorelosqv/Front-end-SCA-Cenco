export type StatusAuth = "authenticating" | "not-authenticated" | "authenticated";

interface User {
    Identifacion: number;
    Nombres: string;
    Apellidos: string;
    Correo: string;
    Password: string;
    FechaCreacion: Date;
    
}

export interface IAuth {
    status: StatusAuth;
    user: null | User;
    token: null | string;
    refreshToken: null | string;
}

export interface ICreateUser {
    Identifacion: number;
    NombreCompleto: string;
    Correo: string;
    Password: string;
    ValidarPassword: string;
}

export interface ILoginUser {
    Identificacion: number;
    Password: string;
}

