interface Autorizacion {
    Nombres: string;
    Apellidos: string,
    Correo: string,
    DocumentoArl: File,
    DocumentoIdentificacion: File,
    DocumentoEps: File,
    FechaAutorizacion: string,
    HoraEntradaAutorizacion: string,
    HoraSalidaAutorizacion: string,
    Identificacion: number,
    Departamento: string,
    Municipio: string,
    Tienda: string,
    Area: string,
    Descripcion: string;
}

export interface IStatusAutorizacion {
    status: number
}

export interface IAgendarAutorizacion {
    Nombres: string;
    Apellidos: string,
    Correo: string,
    DocumentoArl: File,
    DocumentoIdentificacion: File,
    DocumentoEps: File,
    FechaAutorizacion: string,
    HoraEntradaAutorizacion: string,
    HoraSalidaAutorizacion: string,
    Identificacion: number,
    Departamento: string,
    Municipio: string,
    Tienda: string,
    Area: string,
    Descripcion: string;
}

