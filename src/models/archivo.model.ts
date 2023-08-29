export type status = "guardado" | "no-guardado";

interface Archivo {
    IdUsuario: number;
    Descripcion: string;
    Archivo: File;
    
}

export interface IStatus {
    status: status
}


export interface ISubirArchivo {
    IdUsuario: number;
    Descripcion: string;
    Archivo: File;
}

