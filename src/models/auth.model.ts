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
    FotoFrontal: string;
    TipoIdentificacion: string;
    Identifacion: number;
    Correo: string;
    NombreCompleto: string;
    Password: string;
    NombreEmpresa: string;
    NitEmpresa: string;
    CargoTrabajador: string;
}

export interface ILoginUser {
    Correo: string;
    Password: string;
}

